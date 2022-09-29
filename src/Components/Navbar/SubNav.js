import React from 'react';
import { MdSpaceDashboard,MdCampaign } from 'react-icons/md';
import { FaUserFriends,FaCalendarAlt } from 'react-icons/fa';
import { RiTeamFill,RiUserSettingsFill } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdWifiCalling3,MdSettings } from 'react-icons/md';
import '../CSS/Style.css'

const SubNav = () => {
    return (
        <div id='sub-nav' className='nav-container py-3'>
            <div className='row sub-nav-menu'>
                <div className='col-md-1'>
                    <MdSpaceDashboard className='me-2 mb-1 sub-nav-icon'/> 
                    Dashboard
                </div>
                <div className='col-md-1'>
                    <FaUserFriends className='me-2 mb-1 sub-nav-icon'/>
                    User</div>
                <div className='col-md-1'>
                    <RiTeamFill className='me-2 mb-1 sub-nav-icon'/>
                    Team</div>
                <div className='col-md-1'>
                    <TbReportAnalytics className='me-2 mb-1 sub-nav-icon'/>
                    Reports</div>
                <div className='col-md-1'>
                    <MdCampaign className='me-2 mb-1 sub-nav-icon'/>
                    Campaign</div>
                <div className='col-md-1'>
                    <FaCalendarAlt className='me-2 mb-1 sub-nav-icon'/>
                    Appointment</div>
                <div className='col-md-1 ms-2'>
                    <MdWifiCalling3 className='me-2 mb-1 sub-nav-icon'/>
                    Contact</div>
                <div className='col-md-1'>
                    <MdSettings className='me-2 mb-1 sub-nav-icon'/>
                    Settings</div>
                <div className='col-md-2'>
                    <RiUserSettingsFill className='me-2 mb-1 sub-nav-icon'/>
                    Lender Settings</div>
            </div>
        </div>
    );
};

export default SubNav;