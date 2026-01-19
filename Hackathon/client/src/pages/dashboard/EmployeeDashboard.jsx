import React, { useState, useMemo } from "react";
import {Box,Drawer,List,ListItemButton,ListItemIcon,ListItemText,IconButton,AppBar,Toolbar,Typography,Button,CssBaseline,Tooltip,} from "@mui/material";
import {Menu as MenuIcon,AccountCircle as AccountCircleIcon,Notifications as NotificationsIcon,Brightness4,Brightness7,} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {FaHome,FaTasks,FaProjectDiagram,FaClock,FaTrophy,FaUser,FaQuestion,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/Auth/AuthSlice";
import Dashboard from "../../components/employeeDashboardPages/Dashboard";
import MyPerformance from "../../components/employeeDashboardPages/MyPerformance";
import Mytasks from "../../components/employeeDashboardPages/Mytasks";
import Attendance from "../../components/employeeDashboardPages/Attendance";
import Profile from "../../components/employeeDashboardPages/Profile";
import MyProjects from "../../components/employeeDashboardPages/MyProjects";
const expandedWidth = 250;
const collapsedWidth = 80;
const EmployeeDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
            paper: darkMode ? "#1e1e2f" : "#ffffff",
          },
          text: {
            primary: darkMode ? "#e0e0e0" : "#222222",
          },
        },
      }),
    [darkMode]
  );
  const menuItems = [
    { label: "Dashboard", icon: <FaHome /> },
    { label: "My Tasks", icon: <FaTasks /> },
    { label: "My Projects", icon: <FaProjectDiagram /> },
    { label: "Attendance", icon: <FaClock /> },
    { label: "My Performance", icon: <FaTrophy /> },
    { label: "Profile", icon: <FaUser /> },
    { label: "Support", icon: <FaQuestion /> },
  ];
  const handleToggleSidebar = () => setCollapsed((prev) => !prev);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            height: "90px",
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            background: darkMode
              ? "linear-gradient(135deg, rgb(43, 45, 179), rgb(43, 64, 156), #2d7999ff)"
              : "linear-gradient(135deg, #3621adff, #4a2fa8ff)",
          }}
        >
          <Toolbar sx={{ marginTop: "10px" }}>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
              Employee Dashboard
            </Typography>
            <IconButton color="inherit">
              <NotificationsIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Brightness7 sx={{ color: "#fff" }} />
              ) : (
                <Brightness4 sx={{ color: "#fff" }} />
              )}
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: collapsed ? collapsedWidth : expandedWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: collapsed ? collapsedWidth : expandedWidth,
              marginTop: "90px",
              height: "calc(100vh - 90px)",
              background: darkMode
                ? "linear-gradient(180deg, #1e1e2f, #121212)"
                : "linear-gradient(180deg, #3b2e85ff, #34347cff)",
              transition: "width 0.3s ease",
              overflowY: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            },
          }}
        >
          <Box sx={{ p: 1, position: "relative" }}>
            <IconButton
              onClick={handleToggleSidebar}
              sx={{
                position: "absolute",
                top: 1,
                right: collapsed ? 8 : 12,
                zIndex: 10,
                "&:hover": { background: "#c1cddaff" },
                borderRadius: 2,
                my: 1,
              }}
            >
              <MenuIcon />
            </IconButton>  
            <List sx={{ mt: 5 }}>
              {menuItems.map((item) => (
                <Tooltip
                  key={item.label}
                  title={collapsed ? item.label : ""}
                  placement="right"
                >
                  <ListItemButton
                    selected={selectedMenuItem === item.label}
                    onClick={() => {
                      if (collapsed) setCollapsed(false);
                      setSelectedMenuItem(item.label);
                    }}
                    sx={{
                      justifyContent: collapsed ? "center" : "flex-start",
                      borderRadius: 2,
                      mb: 1,
                      px: collapsed ? 2 : 3,
                      position: "relative",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4)",
                        color: "#fff",
                        "& .MuiListItemIcon-root": { color: "#fff" },
                      },
                      "&.Mui-selected": {
                        background:
                          "linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4)",
                        color: "#fff",
                        "& .MuiListItemIcon-root": { color: "#fff" },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          right: 8,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? "auto" : "40px",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    {!collapsed && (
                      <ListItemText
                        primary={item.label}
                        sx={{ color: "#fff" }}
                      />
                    )}
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "90px",
            minHeight: "calc(100vh - 90px)",
            background: muiTheme.palette.background.default,
            color: muiTheme.palette.text.primary,
          }}
        >
          {selectedMenuItem === "Dashboard" && <Dashboard />}
          {selectedMenuItem === "My Tasks" && <Mytasks />}
          {selectedMenuItem === "My Projects" && <MyProjects />}
          {selectedMenuItem === "My Performance" && <MyPerformance />}
          {selectedMenuItem === "Attendance" && <Attendance />}
          {selectedMenuItem === "Profile" && <Profile />}
          {selectedMenuItem === "Support" && (
            <Box>
              <Typography variant="h5">Support</Typography>
              <Typography>Contact support for any issues.</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EmployeeDashboard;
