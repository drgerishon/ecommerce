import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <span className= "logo">LAMAADMIN</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
            <DashboardIcon className="icon"/>
              <span>Dashobord</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonIcon className="icon"/>
              <span>Users</span>
            </li>
            <li>
              <QrCodeOutlinedIcon className="icon"/>
              <span>Products</span>
            </li>
            <li>
              <Inventory2OutlinedIcon className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <AirportShuttleOutlinedIcon className="icon"/>
              <span>Derivery</span>
            </li>
            <p className="title">USEFUL</p>
           <li>
              <AssessmentOutlinedIcon className="icon"/>
              <span>Stats</span>
            </li>
             <li>
               <NotificationsActiveOutlinedIcon className="icon" />
              <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
             <li>
               <SettingsSystemDaydreamOutlinedIcon className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsOutlinedIcon className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppOutlinedIcon className="icon"/>
              <span>Logout</span>
            </li>
          </ul>

        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
