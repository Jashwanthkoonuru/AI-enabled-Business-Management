package com.company.platform.config;

import com.company.platform.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // ✅ JWT = stateless → CSRF must be disabled
                .csrf(csrf -> csrf.disable())

                // ✅ Stateless session
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                // ✅ Authorization rules (ORDER MATTERS)
                .authorizeHttpRequests(auth -> auth

                        // 🔓 AUTH ENDPOINTS (PUBLIC)
                        .requestMatchers(
                                "/api/v1/auth/login",
                                "/api/v1/auth/register",
                                "/api/v1/auth/refresh"
                        ).permitAll()

                        // 🔓 SWAGGER (PUBLIC)
                        .requestMatchers(
                                "/v3/api-docs/**",
                                "/swagger-ui/**",
                                "/swagger-ui.html"
                        ).permitAll()

                        // 🔐 USER APIs
                        .requestMatchers("/api/user/**").hasAuthority("ROLE_USER")

                        // 🔐 ADMIN APIs
                        .requestMatchers("/api/admin/**").hasAuthority("ROLE_ADMIN")

                        // 🔐 EVERYTHING ELSE
                        .anyRequest().authenticated()
                )

                // ✅ JWT FILTER (runs AFTER auth rules are known)
                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class
                );

        return http.build();
    }

    // ✅ REQUIRED in Spring Security 6
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration
    ) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
