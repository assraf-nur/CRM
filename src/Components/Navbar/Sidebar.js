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
import { Collapse } from "react-bootstrap";
import AddLender from "../Setting/AddLender";
import { AiFillCaretDown } from "react-icons/ai";
import LenderList from "../Setting/LenderList";
import SmtpSetting from "../Setting/SmtpSetting";
import SmsConfiguration from "../Setting/SmsConfiguration";
import CompanySetting from "../Setting/CompanySetting";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import SettingDropDown from "./DropDowns/SettingDropDown";
import LenderSetting from "./DropDowns/LenderSetting";
import { RiUserSettingsFill } from "react-icons/ri";
import LenderCategory from "../LendersSetting/LenderCategory";
import LenderFilter from "../LendersSetting/LenderFilter";
import LendersList from "../LendersSetting/LendersList";

const drawerWidth = 260;

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
  const [openUp, setOpenUp] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDownLenderSetting, setOpenDownLenderSetting] =
    React.useState(false);

  const handleDrawerOpen2 = () => {
    setOpen(true);
  };

  const handleDrawerClose2 = () => {
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
            onClick={handleDrawerOpen2}
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
          <IconButton onClick={handleDrawerClose2}>
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
                  onClick={() => setOpenUp(!openUp)}
                  aria-controls="example-collapse-text1"
                  aria-expanded={openUp}
                  className="py-3 left-list-link"
                  to="/setting"
                >
                  <SettingsApplicationsIcon className="icons me-4" />
                  Setting <AiFillCaretDown className="ms-5" />
                </Link>
              </Tooltip>
            </ListItem>
            <>
              <div>
                <Collapse in={openUp}>
                  <div id="example-collapse-text1">
                    <SettingDropDown></SettingDropDown>
                  </div>
                </Collapse>
              </div>
            </>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Setting" placement="top" arrow>
                <Link
                  onClick={() =>
                    setOpenDownLenderSetting(!openDownLenderSetting)
                  }
                  aria-controls="example-collapse-text2"
                  aria-expanded={openDownLenderSetting}
                  className="py-3 left-list-link"
                  to="/setting"
                >
                  <RiUserSettingsFill className="icons me-4 fs-4" />
                  Lender Setting <AiFillCaretDown className="ms-3" />
                </Link>
              </Tooltip>
            </ListItem>
            <Divider />
            <>
              <div>
                <Collapse in={openDownLenderSetting}>
                  <div id="example-collapse-text2">
                    <LenderSetting></LenderSetting>
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
          <Route path="lenderCategory" element={<LenderCategory></LenderCategory>}/>
          <Route path="lenderFilter" element={<LenderFilter></LenderFilter>}/>
          <Route path="lendersList" element={<LendersList></LendersList>}/>
        </Routes>
      </Box>
    </Box>
  );
}
