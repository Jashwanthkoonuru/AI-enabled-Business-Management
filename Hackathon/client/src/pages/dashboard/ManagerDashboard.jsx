import React, { useState, useMemo } from "react";
import {Box,Drawer,List,ListItemButton,ListItemIcon,ListItemText,IconButton,AppBar,Toolbar,Typography,Button,CssBaseline,Tooltip,} from "@mui/material";
import {Menu as MenuIcon,AccountCircle as AccountCircleIcon,Notifications as NotificationsIcon,Brightness4,Brightness7,} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {FaTachometerAlt,FaUsers,FaTasks,FaProjectDiagram,FaClock,FaFileAlt,FaChartLine,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/Auth/AuthSlice";
import TeamOverview from "../../components/managerDashboardPages/TeamOverView";
import TeamTask from "../../components/managerDashboardPages/TeamTask";
import Projects from "../../components/managerDashboardPages/Project";
import AttendanceApproval from "../../components/managerDashboardPages/AttendanceApproval";
import LeaveRequest from "../../components/managerDashboardPages/LeaveRequest";
import PerformanceReview from "../../components/managerDashboardPages/PerformanceReview";
import Reports from "../../components/managerDashboardPages/Reports";
import Profile from "../../components/managerDashboardPages/Profile";
import ManagerDashboardHome from "../../components/managerDashboardPages/ManagerDashboardHome";
const expandedWidth = 250;
const collapsedWidth = 80;
const ManagerDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToggleSidebar = () => setCollapsed((prev) => !prev);
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode
              ? "rgba(25,25,40,0.95)"
              : "rgba(245,245,250,0.95)",
          },
          text: {
            primary: darkMode ? "#ccc" : "#333",
          },
        },
      }),
    [darkMode]
  );
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };
  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Team Overview", icon: <FaUsers /> },
    { label: "Team Tasks", icon: <FaTasks /> },
    { label: "Projects", icon: <FaProjectDiagram /> },
    { label: "Attendance Approval", icon: <FaClock /> },
    { label: "Leave Requests", icon: <FaFileAlt /> },
    { label: "Performance Reviews", icon: <FaChartLine /> },
    { label: "Reports", icon: <FaChartLine /> },
    { label: "Profile", icon: <AccountCircleIcon /> },
  ];
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            height: "90px",
            background: darkMode
              ? "linear-gradient(135deg, #1d1e7aff, #4a6b96ff, #6a2fbf)"
              : "linear-gradient(135deg, #0f2a44, #1f4b85, #2d095cff)",
            boxShadow: darkMode
              ? "0 12px 25px rgba(0,0,0,0.6)"
              : "0 12px 25px rgba(0,0,0,0.2)",
            backgroundSize: "500% 400%",
            animation: "gradientBG 20s ease infinite",
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            borderBottom: "2px solid rgba(255,255,255,0.15)",
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
              Manager Dashboard
            </Typography>
            <IconButton color="inherit">
              <NotificationsIcon
                sx={{
                  fontSize: 28,
                  color: "#fff",
                  filter: "drop-shadow(0 0 5px #00f6ff)",
                }}
              />
            </IconButton>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Brightness7 sx={{ fontSize: 28, color: "#fff" }} />
              ) : (
                <Brightness4 sx={{ fontSize: 28, color: "#fff" }} />
              )}
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon
                sx={{
                  fontSize: 28,
                  color: "#fff",
                  filter: "drop-shadow(0 0 5px #ff00c8)",
                }}
              />
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
              background: muiTheme.palette.background.default,
              backdropFilter: "blur(15px)",
              boxShadow: darkMode
                ? "0 15px 40px rgba(0,0,0,0.5)"
                : "0 15px 40px rgba(0,0,0,0.1)",
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
                color: darkMode ? "#00f6ff" : "#35062bff",
                filter: "drop-shadow(0 0 8px currentColor)",
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
                      borderRadius: 3,
                      mb: 1,
                      px: collapsed ? 2 : 3,
                      position: "relative",
                      background:
                        selectedMenuItem === item.label
                          ? darkMode
                            ? "linear-gradient(135deg, #ffd700, #0fe2e2ff)"
                            : "linear-gradient(135deg, #612a8fff, #6b20a8ff)"
                          : "transparent",
                      color:
                        selectedMenuItem === item.label
                          ? "#fff"
                          : darkMode
                          ? "#ccc"
                          : "#333",
                      fontWeight:
                        selectedMenuItem === item.label ? "bold" : "normal",
                      "&:hover": {
                        background: darkMode
                          ? "linear-gradient(135deg, #ffa500, #288071ff)"
                          : "linear-gradient(135deg, #7756a3ff, #765ecaff)",
                        color: "#fff",
                        "& .MuiListItemIcon-root": {
                          color: "#fff",
                          filter: "drop-shadow(0 0 5px #fff)",
                        },
                      },
                      "& .MuiListItemIcon-root": {
                        color:
                          selectedMenuItem === item.label
                            ? "#fff"
                            : darkMode
                            ? "#00e5ff"
                            : "#0d47a1",
                        filter:
                          selectedMenuItem === item.label
                            ? "drop-shadow(0 0 6px currentColor)"
                            : "none",
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
          {selectedMenuItem === "Dashboard" && <ManagerDashboardHome />}
          {selectedMenuItem === "Team Overview" && <TeamOverview />}
          {selectedMenuItem === "Team Tasks" && <TeamTask />}
          {selectedMenuItem === "Projects" && <Projects />}
          {selectedMenuItem === "Attendance Approval" && <AttendanceApproval />}
          {selectedMenuItem === "Leave Requests" && <LeaveRequest />}
          {selectedMenuItem === "Performance Reviews" && <PerformanceReview />}
          {selectedMenuItem === "Reports" && <Reports />}
          {selectedMenuItem === "Profile" && <Profile />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ManagerDashboard;
