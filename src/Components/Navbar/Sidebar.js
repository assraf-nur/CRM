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
import TaskIcon from "@mui/icons-material/Task";
import EventIcon from "@mui/icons-material/Event";
import Task from "../Task/Task";
import Appointment from "../Appointment/Appointment";
import CampaignIcon from "@mui/icons-material/Campaign";
import Marketing from "../Marketing/Marketing";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Reports from "../Reports/Reports";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Setting from "../Setting/Setting";
import ReportList from "../Reports/ReportList";
import ContactDetails from "../Contact/ContactDetails";
import { Card, Collapse } from "react-bootstrap";
import AddLender from "../Setting/AddLender";
import { AiOutlineUserAdd } from "react-icons/ai";
import LenderList from "../Setting/LenderList";
import SmtpSetting from "../Setting/SmtpSetting";
import SmsConfiguration from "../Setting/SmsConfiguration";
import CompanySetting from "../Setting/CompanySetting";
import { MdSettingsSuggest } from "react-icons/md";
import { RiListSettingsLine, RiMailSettingsLine } from "react-icons/ri";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";

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
              <Tooltip title="Home" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/home">
                  <HomeIcon className="icons me-4 mb-1" />
                  Home
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="users" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/users">
                  <PeopleAltIcon className="icons me-4 mb-1" />
                  Users
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Department" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/department">
                  <FaUsersCog className="icons fs-4 me-4 mb-1" />
                  Department
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Calendar" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/calendar">
                  <FaCalendarAlt className="icons fs-5 me-4 mb-1" />
                  Calendar
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Task" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/task">
                  <TaskIcon className="icons me-4 mb-1" />
                  Task
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Appointment" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/appointment">
                  <EventIcon className="icons me-4" />
                  Appointment
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Marketing" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/marketing">
                  <CampaignIcon className="icons me-4" />
                  Marketing
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Reports" placement="top" arrow>
                <Link className="py-3 left-list-link" to="/reports">
                  <AssignmentIcon className="icons me-4" />
                  Reports
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Setting" placement="top" arrow>
                <Link
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="py-3 left-list-link"
                  to="/setting"
                >
                  <SettingsApplicationsIcon className="icons me-4" />
                  Setting
                </Link>
              </Tooltip>
            </ListItem>
            <>
              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <Card className="mt-1 mx-1">
                      <List>
                        <ListItem className="px-0 py-0">
                          <Link className="py-3 left-list-link" to="/addLender">
                            <AiOutlineUserAdd className="icons me-3 mb-1 fs-5" />
                            Add Lenders
                          </Link>
                        </ListItem>
                        <Divider />
                        <ListItem className="px-0 py-0">
                          <Link
                            className="py-3 left-list-link"
                            to="/smtpSetting"
                          >
                            <MdSettingsSuggest className="icons me-3 mb-1 fs-5" />
                            SMTP Setting
                          </Link>
                        </ListItem>
                        <Divider />
                        <ListItem className="px-0 py-0">
                          <Link className="py-3 left-list-link" to="/smsConfig">
                            <RiMailSettingsLine className="icons me-3 mb-1 fs-5" />
                            SMS Configuration
                          </Link>
                        </ListItem>
                        <Divider />
                        <ListItem className="px-0 py-0">
                          <Link
                            className="py-3 left-list-link"
                            to="/companySetting"
                          >
                            <RiListSettingsLine className="icons me-3 mb-1 fs-5" />
                            Company Setting
                          </Link>
                        </ListItem>
                      </List>
                    </Card>
                  </div>
                </Collapse>
              </div>
            </>
          </List>
        </nav>
      </Drawer>
      <Box className="right-box pb-5" component="main" sx={{ flexGrow: 1 }}>
        <div className="subs-nav">
          <SubNav />
        </div>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route
            path="contact-details"
            element={<ContactDetails></ContactDetails>}
          />
          <Route path="users" element={<Users></Users>} />
          <Route path="department" element={<Department></Department>} />
          <Route path="calendar" element={<Calender></Calender>} />
          <Route path="task" element={<Task></Task>} />
          <Route path="appointment" element={<Appointment></Appointment>} />
          <Route path="marketing" element={<Marketing></Marketing>} />
          <Route path="reports" element={<Reports></Reports>} />
          <Route path="reports-list" element={<ReportList></ReportList>} />
          <Route path="setting" element={<Setting></Setting>} />
          <Route path="addLender" element={<AddLender></AddLender>} />
          <Route path="lenderList" element={<LenderList></LenderList>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="signUp" element={<SignUp></SignUp>} />

          <Route path="smtpSetting" element={<SmtpSetting></SmtpSetting>} />
          <Route
            path="smsConfig"
            element={<SmsConfiguration></SmsConfiguration>}
          />
          <Route
            path="companySetting"
            element={<CompanySetting></CompanySetting>}
          />
        </Routes>
      </Box>
    </Box>
  );
}
