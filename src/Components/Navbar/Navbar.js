import { Button, Form, InputGroup } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/Logo/crmLogo.png";
import {
  BsSearch,
  BsPlusLg,
  BsFillTelephoneOutboundFill,
  BsFillBellFill,
  BsCalendarCheck,
} from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiOutlineAtSymbol } from "react-icons/hi";
import "../CSS/Style.css";
import profile from "../Images/Profile/profile-pic.png";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <InputGroup className="">
                <Form.Control
                  id="search-bar"
                  placeholder="Search.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <BsSearch />
                </Button>
              </InputGroup>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" id="bs-plus">
              <BsPlusLg />
            </Nav.Link>
            <Nav.Link className="navicons" href="#">
              <BsFillTelephoneOutboundFill />
            </Nav.Link>
            <Nav.Link className="navicons" href="#">
              <AiFillMessage />
            </Nav.Link>
            <Nav.Link className="navicons" href="#">
              <HiOutlineAtSymbol />
            </Nav.Link>
            <Nav.Link className="navicons" href="#">
              <BsFillBellFill />
            </Nav.Link>
            <Nav.Link className="navicons" href="#">
              <BsCalendarCheck />
            </Nav.Link>
            <div className="d-flex ms-3">
              <img id="profile-pic" src={profile} alt="" />
              <NavDropdown
                className="me-5"
                title="Nur Tesla"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/login">Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
