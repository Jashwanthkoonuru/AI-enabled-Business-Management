package com.company.platform.auth.controller;

import com.company.platform.auth.dto.LoginRequest;
import com.company.platform.auth.dto.RegisterRequest;
import com.company.platform.security.JwtService;
import com.company.platform.user.UserService;
import com.company.platform.user.User;
import com.company.platform.role.Role;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    public AuthController(
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            UserService userService
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    // ✅ REGISTER
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody RegisterRequest request) {

        userService.registerUser(
                request.getUsername(),
                request.getEmail(),
                request.getPassword()
        );

        return Map.of("message", "User registered successfully");
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest request) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        List<String> roles = authentication.getAuthorities()
                .stream()
                .map(a -> a.getAuthority())
                .toList();

        return Map.of(
                "accessToken", jwtService.generateAccessToken(request.getUsername(), roles),
                "refreshToken", jwtService.generateRefreshToken(request.getUsername())
        );
    }

    // ✅ REFRESH TOKEN
    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestBody Map<String, String> request) {

        String refreshToken = request.get("refreshToken");

        if (refreshToken == null || refreshToken.isBlank()) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Refresh token missing"));
        }

        if (!jwtService.isRefreshTokenValid(refreshToken)) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Invalid or expired refresh token"));
        }

        String username = jwtService.extractUsername(refreshToken);

        User user = userService.getUserByUsernameEntity(username);

        List<String> roles = user.getRoles()
                .stream()
                .map(Role::getName)
                .toList();

        String newAccessToken =
                jwtService.generateAccessToken(username, roles);

        return ResponseEntity.ok(
                Map.of("accessToken", newAccessToken)
        );
    }
}
