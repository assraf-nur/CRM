import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import SubNav from "./SubNav";
import Navbar from "./Navbar";
import "../CSS/Style.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Tooltip } from "@mui/material";
import Users from "../Users/Users";
import Department from "../Department/Department";
import { FaUsersCog, FaCalendarAlt } from "react-icons/fa";
import Calender from "../Calender/Calender";
import TaskIcon from '@mui/icons-material/Task';
import EventIcon from '@mui/icons-material/Event';
import Task from "../Task/Task";
import Appointment from "../Appointment/Appointment";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ boxShadow: 0 }}>
        <Toolbar className="toolBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon className="text-dark fw-bold" />
          </IconButton>
          <div className="w-100 ms-3">
            <Navbar />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <Tooltip title="Home" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/home">
                  <HomeIcon className="ms-1 me-4 mb-1" />
                  Home
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="users" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/users">
                  <PeopleAltIcon className="ms-1 me-4 mb-1" />
                  Users
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Department" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/department">
                  <FaUsersCog className="ms-1 fs-4 me-4 mb-1" />
                  Department
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Department" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/calendar">
                  <FaCalendarAlt className="ms-1 fs-5 me-4 mb-1" />
                  Calendar
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Department" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/task">
                  <TaskIcon className="ms-1 me-4 mb-1" />
                  Task
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Department" arrow>
                <Link className="ms-3 py-3 left-list-link" to="/appointment">
                  <EventIcon className="ms-1 me-4 mb-1" />
                  Appointment
                </Link>
              </Tooltip>
            </ListItem>
          </List>
        </nav>
      </Drawer>
      <Box className="right-box" component="main" sx={{ flexGrow: 1 }}>
        <div className="subs-nav">
          <SubNav />
        </div>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="users" element={<Users></Users>} />
          <Route path="department" element={<Department></Department>} />
          <Route path="calendar" element={<Calender></Calender>} />
          <Route path="task" element={<Task></Task>} />
          <Route path="appointment" element={<Appointment></Appointment>} />
        </Routes>
      </Box>
    </Box>
  );
}
