import MoreVertIcon from '@mui/icons-material/MoreVert';
import './featured.scss'
 import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
 import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
 import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'> Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressBar value={70} text={"70"}/>
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payment may no be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
                <div className="itemResult">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$200</div>
                </div>
            </div>
            <div className="item">
              <div className="itemTitle">Target</div>
                <div className="itemResult">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$200</div>
                </div>
            </div>
            <div className="item">
              <div className="itemTitle">Target</div>
                <div className="itemResult">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$200</div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
