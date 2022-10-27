import React from 'react';
import profilePic2 from "../../Images/Profile/profile-pic2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Table } from "react-bootstrap";
import profilePic from "../../Images/Profile/profile-pic.png";
import redCall from "../../Images/SVG/red-call.svg";
import blueCall from "../../Images/SVG/blue-call.svg";
import callPic from "../../Images/Profile/call-pic1.png";
import callPic2 from "../../Images/Profile/call-pic2.png";
import callPic3 from "../../Images/Profile/call-pic3.png";
import callPic4 from "../../Images/Profile/call-pic4.png";
import callPic5 from "../../Images/Profile/call-pic5.png";
import callPic6 from "../../Images/Profile/call-pic6.png";

const Tables = () => {
    return (
        <div className="row gap-4">
          <div className="col-xl crm-box p-4">
            <div>
              <div className="box-title">
                <h5>Activity Timeline</h5>
                <MoreVertIcon />
              </div>
              <div>
                <div className="step completed">
                  <div className="v-stepper">
                    <div className="circle"></div>
                    <div className="line"></div>
                  </div>

                  <div className="content w-100">
                    <div className="row">
                      <p className="col-sm-9 step-title">
                        Mrinmoy Krishna join in Jibble
                      </p>
                      <p className="col-sm-3 text-end">
                        <small>05 min ago</small>
                      </p>
                    </div>
                    <div className="d-flex gap-3 step-content">
                      <div>
                        <img src={profilePic} alt="" />
                      </div>
                      <div className="step-sub-content">
                        <p>Mrinmoy Krishna</p>
                        <small>UI UX Designer</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step pending">
                  <div className="v-stepper">
                    <div className="circle"></div>
                    <div className="line"></div>
                  </div>

                  <div className="content w-100">
                    <div className="row">
                      <p className="col-sm-9 step-title">Client Meeting</p>
                      <p className="col-sm-3 text-end">
                        <small>45 min ago</small>
                      </p>
                    </div>
                    <p className="sub-paragraph">
                      Project meeting with Krishna @10:15am
                    </p>
                    <div className="d-flex gap-3 step-content">
                      <div>
                        <img src={profilePic2} alt="" />
                      </div>
                      <div className="step-sub-content">
                        <p>Krishna (Client)</p>
                        <small>Manager of XYZ</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="v-stepper">
                    <div className="circle"></div>
                    <div className="line"></div>
                  </div>

                  <div className="content w-100">
                    <div className="row">
                      <p className="col-sm-9 step-title">
                        Create a new project for client
                      </p>
                      <p className="col-sm-3 text-end">
                        <small>1 day ago</small>
                      </p>
                    </div>
                    <p className="sub-paragraph">5 team members in a project</p>
                  </div>
                </div>

                <div className="step">
                  <div className="v-stepper">
                    <div className="circle"></div>
                    <div className="line"></div>
                  </div>

                  <div className="content w-100">
                    <div className="row">
                      <p className="col-sm-9 step-title">
                        Running out of juice
                      </p>
                      <p className="col-sm-3 text-end">
                        <small>05 min ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl crm-box p-4">
            <div>
              <div className="box-title">
                <h5>Call Logs</h5>
                {/* <MoreVertIcon /> */}
              </div>
              <div className="mt-1">
                <Table className="table-box" responsive="sm">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={callPic} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic2} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic3} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic4} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic5} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic6} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="col-xl crm-box p-4">
            <div className="team-box">
              <div className="box-title">
                <h5> Team Members </h5>
              </div>
              <div className="row box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic6} alt="" />
                  <p className="mt-1">Mrinmoy Krishna</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Team Lead</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic5} alt="" />
                  <p className="mt-1">Jenny Wilson</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Web Designer</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic4} alt="" />
                  <p className="mt-1">Guy Hawkins</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Dog Trainer</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic3} alt="" />
                  <p className="mt-1">Arlene McCoy</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">President of Sales</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic2} alt="" />
                  <p className="mt-1">Cody Fisher</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Nursing Assistant</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic} alt="" />
                  <p className="mt-1">Theresa Webb</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Medical Assistant</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Tables;