import React from 'react';
import './Sidebar.css';
import Ownfieldbg from '../Firstpage/Ownfieldbg.png';
import manu from '../Firstpage/manu.png';

const Sidebar = ({ isOpen, handleSideBarToggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div id="manu">
        <button onClick={handleSideBarToggle}><img src={manu} alt="manuBtn"/></button>
      </div>

      {/* Profile section */}
      <div id="profile">
        <div id="P-img">
          <img src={Ownfieldbg} alt='ProfilePhoto'></img>
        </div>
        <h2>John Doe</h2>
      </div>

      {/* Button section */}
      <div id="btns">
        <div className="feature"><button>Edit Profile</button></div>
        <div className="feature"><button>Home</button></div>
        <div className="feature"><button>DashBoard</button></div>
        <div className="feature"><button>Orders</button></div>
        <div className="feature"><button>Cart</button></div>
        <div className="feature"><button>Contact</button></div>
      </div>
    </div>
  );
};

export default Sidebar;
