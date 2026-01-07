import React, { useState, useMemo } from "react";
import {Box,Drawer,List,ListItemButton,ListItemIcon,ListItemText,IconButton,AppBar,Toolbar,Typography,Button,CssBaseline,Tooltip,} from "@mui/material";
import {Menu as MenuIcon,AccountCircle as AccountCircleIcon,Notifications as NotificationsIcon,Brightness4,Brightness7,} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FaTachometerAlt, FaUsers, FaClock, FaFileAlt, FaMoneyCheckAlt, FaChartLine, FaUserPlus, FaBook, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../features/auth/authSlice";
import DashboardPage from "../../components/hrDashboardPages/DashboardPage";
import Employees from "../../components/hrDashboardPages/Employees";
import Attendance from "../../components/hrDashboardPages/Attendance";
import LeaveManagement from "../../components/hrDashboardPages/LeaveManagement";
import Payroll from "../../components/hrDashboardPages/Payroll";
import PerformanceManagement from "../../components/hrDashboardPages/PerformanceManagement";
import Recruitment from "../../components/hrDashboardPages/Recruitment";
import PoliciesDocuments from "../../components/hrDashboardPages/PoliciesDocuments";
import Reports from "../../components/hrDashboardPages/Reports";
import Profile from "../../components/hrDashboardPages/Profile";
const expandedWidth = 250;
const collapsedWidth = 80;
const HRDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const muiTheme = useMemo(() =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "rgba(25,25,40,0.95)" : "rgba(245,245,250,0.95)",
          },
          text: {
            primary: darkMode ? "#ccc" : "#333",
          },
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                transition: "width 0.3s ease, background 0.3s ease",
              },
            },
          },
        },
      }),
    [darkMode]
  );
    const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };
  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Employees", icon: <FaUsers /> },
    { label: "Attendance", icon: <FaClock /> },
    { label: "Leave Management", icon: <FaFileAlt /> },
    { label: "Payroll", icon: <FaMoneyCheckAlt /> },
    { label: "Performance Management", icon: <FaChartLine /> },
    { label: "Recruitment", icon: <FaUserPlus /> },
    { label: "Policies and Documents", icon: <FaBook /> },
    { label: "Reports", icon: <FaChartLine /> },
    { label: "Profile", icon: <AccountCircleIcon /> },
  ];
  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
        position="fixed"
        sx={{
            height: "90px",
            background: darkMode
            ? "linear-gradient(135deg, #0f0c29, #302b63, #6a3093)" 
            : "linear-gradient(135deg, #6c80aaff, #465a79ff, #c532caff)", 
            boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            borderBottom: "2px solid rgba(255,255,255,0.2)",
            backgroundSize: "400% 400%",
            animation: "gradientBG 15s ease infinite",
        }}
        >
        <Toolbar sx={{ marginTop: "10px" }}>
            <Typography
            variant="h6"
            sx={{
                flexGrow: 1,
                fontWeight: "bold",
                letterSpacing: 1,
                color: "#fff",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
            >
            HR Dashboard
            </Typography>
            <IconButton color="inherit">
            <NotificationsIcon sx={{ fontSize: 28, color: "#fff", filter: "drop-shadow(0 0 5px #00f6ff)" }} />
            </IconButton>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode
                ? <Brightness7 sx={{ fontSize: 28, color: "#fff" }} />
                : <Brightness4 sx={{ fontSize: 28, color: "#fff" }} />}
            </IconButton>
            <IconButton color="inherit">
            <AccountCircleIcon sx={{ fontSize: 28, color: "#fff", filter: "drop-shadow(0 0 5px #ff00c8)" }} />
            </IconButton>
            <Button
            color="inherit"
            onClick={() => handleLogout()}
            sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                ml: 1,
                px: 2,
                borderRadius: 2,
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                backdropFilter: "blur(5px)",
                "&:hover": { background: "rgba(255,255,255,0.3)" },
                boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
            >
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
              // background: darkMode
              //     ? "rgba(10,10,30,0.85)"
              //     : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(15px)",
              background: muiTheme.palette.background.default,
              boxShadow: darkMode
                  ? "0 15px 40px rgba(0,0,0,0.6)"
                  : "0 15px 40px rgba(0,0,0,0.2)",
              transition: "width 0.3s ease, background 0.3s ease",
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
                "&:hover": { background: "rgba(255,255,255,0.1)" },
                borderRadius: 2,
                my: 1,
                color: darkMode ? "#00f6ff" : "#ff00c8",
                filter: "drop-shadow(0 0 8px currentColor)",
            }}
            >
            <MenuIcon />
            </IconButton>
            <List sx={{ mt: 5 }}>
            {menuItems.map((item) => (
                <Tooltip key={item.label} title={collapsed ? item.label : ""} placement="right">
                <ListItemButton
                    selected={selectedMenuItem === item.label}
                    onClick={() => {
                    if (collapsed) setCollapsed(false);
                    setSelectedMenuItem(item.label);
                    }}
                    sx={{
                    justifyContent: collapsed ? "center" : "flex-start",
                    borderRadius: 3,
                    mb: 1,
                    px: collapsed ? 2 : 3,
                    position: "relative",
                    background:
                        selectedMenuItem === item.label
                        ? darkMode
                            ? "linear-gradient(135deg, #00f6ff, #1dc7b9ff)" // Neon blue selected
                            : "linear-gradient(135deg, #715b8aff, #39267eff)" // Neon pink selected
                        : "transparent",
                    color: selectedMenuItem === item.label ? "#fff" : darkMode ? "#aaa" : "#333",
                    fontWeight: selectedMenuItem === item.label ? "bold" : "normal",
                    "&:hover": {
                        background: darkMode
                        ? "linear-gradient(135deg, #00bfff, #1dc7b9ff)"
                        : "linear-gradient(135deg, #715b8aff, #39267eff)",
                        color: "#fff",
                        "& .MuiListItemIcon-root": { color: "#fff", filter: "drop-shadow(0 0 5px #fff)" },
                    },
                    "& .MuiListItemIcon-root": {
                        color: selectedMenuItem === item.label ? "#fff" : darkMode ? "#0ff" : "#ff00c8",
                        filter: selectedMenuItem === item.label ? "drop-shadow(0 0 6px currentColor)" : "none",
                    },
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: collapsed ? "auto" : "40px",
                        justifyContent: "center",
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    {!collapsed && <ListItemText primary={item.label} />}
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
            transition: "all 0.3s ease",
            minHeight: "calc(100vh - 90px)",
            background: muiTheme.palette.background.default, 
            color: muiTheme.palette.text.primary,
          }}
        >
          {selectedMenuItem === "Dashboard" && (<DashboardPage />)}
          {selectedMenuItem === "Employees" && (<Employees />)}
          {selectedMenuItem === "Attendance" && (<Attendance />)}
          {selectedMenuItem === "Leave Management" && (<LeaveManagement />)}
          {selectedMenuItem === "Payroll" && (<Payroll />)}
          {selectedMenuItem === "Performance Management" && (<PerformanceManagement />)}
          {selectedMenuItem === "Recruitment" && (<Recruitment />)}
          {selectedMenuItem === "Policies and Documents" && (<PoliciesDocuments /> )}
          {selectedMenuItem === "Reports" && (<Reports />)}
          {selectedMenuItem === "Profile" && (<Profile />)}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default HRDashboard;
