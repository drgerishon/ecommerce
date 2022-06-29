import "./Navbar.scss"
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon  from "@mui/icons-material/FullscreenExitOutlined";
import  NotificationsNoneOutlinedIcon  from "@mui/icons-material/NotificationsNoneOutlined";
import  ChatBubbleOutlineOutlined  from "@mui/icons-material/ChatBubbleOutlineOutlined";
import  ListOutlinedIcon  from "@mui/icons-material/ListOutlined";
import  DarkModeOutlinedIcom  from "@mui/icons-material/DarkModeOutlined";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcom className="icon"/>
            English
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <img src="" alt="" className="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
