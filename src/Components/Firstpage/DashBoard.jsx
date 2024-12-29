import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import './DashBoard.css';
import Ownfieldbg from './Ownfieldbg.png';
import searchIcon from './search.png';
import cartIcon from './cart.png';
import manu from './manu.png';
import Sidebar from '../SideBar/sidebar';
import thumbnail from './thumbnail.png';
import { useNavigate } from 'react-router-dom';

export function DashBoard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  const handleSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
    
  };

  const updateLocation = () => {
    console.log('Update location clicked');
    
  };

  const handleCreate = () => {
    navigate('/upload');
  };

  const handleOrders = () => {
    console.log('Orders clicked');
    
  };

  const handleCart = () => {
    console.log('Cart clicked');
  };

  const fetchItems = async () => {
    try {
      const res = await axios.get('https://ownfield-f0187-default-rtdb.firebaseio.com/public.json'); 
      const data = res.data;
      const itemsArray = Object.values(data); 
      setItems(itemsArray);
    } catch (error) {
      console.log('Error fetching data')
    }
  };

useEffect(() => {
       fetchItems();
        }, []); 

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} handleSideBarToggle={handleSideBarToggle} />
      <header id="headering">
        <div className="header-container">
          {/* Menu Section */}
          <div id="H-Manu">
            <button onClick={handleSideBarToggle}>
              <img src={manu} alt="Menu" />
            </button>
          </div>

          {/* Logo Section */}
          <div id="H-img">
            <img src={Ownfieldbg} alt="OwnField Logo" />
          </div>

          {/* Location Section */}
          <div id="H-Location">
            <p id="location">
              Alwar<br />
              <button onClick={updateLocation}>Update location</button>
            </p>
          </div>

          {/* Search Section */}
          <div id="H-Search">
            <form onSubmit={handleSearch}>
              <div className="search-box">
                <input
                  type="search"
                  id="search"
                  placeholder="Search Here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button id="searchButton" type="submit" aria-label="Search">
                  <img src={searchIcon} alt="Search Icon" />
                </button>
              </div>
            </form>
          </div>

          {/* Language Selector Section */}
          <div id="H-Language">
            <select name="language" id="language">
              <option value="English">English</option>
            </select>
          </div>

          {/* Create Button */}
          <div id="H-Create">
            <button onClick={handleCreate}>Create</button>
          </div>

          {/* Orders Button */}
          <div id="H-Orders">
            <button onClick={handleOrders}>Messages</button>
          </div>

          {/* Cart Button */}
          <div id="H-Cart">
            <button onClick={handleCart} aria-label="View Cart">
              <img src={cartIcon} alt="Cart Icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main id="main">
        <div id="Main-Container">

    <div className="box">
        <div className="M-Img"> 
          <img src={thumbnail} alt="Thumbnail" width="1280px" height="720px" />
        </div>
        <div className="M-Title">
          <div className="Img-Title"><img src={Ownfieldbg} alt="" /></div>
          <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, odit aspernatur dicta ea ullam quae laborum fugit at numquam. Ab, adipisci doloribus. Sunt ullam ea nihil fugiat minima, beatae accusantium delectus unde doloribus sit mollitia, cumque temporibus quam ratione illo corporis quas perferendis tempora maxime aperiam at dolorum! Repellat omnis eius facilis! Rem magni laboriosam dicta eligendi, pariatur ea id, doloribus eveniet tempora repudiandae cupiditate repellat molestias possimus nam alias. Laboriosam ipsam ipsa earum. Temporibus, ipsam quos in distinctio quibusdam officiis, pariatur voluptatem sunt, commodi debitis laborum ad at laudantium deleniti earum itaque inventore repudiandae repellendus laboriosam. Culpa, perferendis tempora.</p>
        </div>
       <div className="M-Stock">
        <p className='address'>Alwar</p>
        <p className='stock'>Stock : 20Kg</p>
       </div>
      </div>


{/* fecting data  */}


          {items.map((item, index) => (
            <div className="box" key={index}>
              <div className="M-Img"> 
                  <img src={item.Files ? item.Files[0] : thumbnail} alt="Thumbnail" width="1280px" height="720px" />
               </div>
              <div className="M-Title">
                <div className="Img-Title"><img src={Ownfieldbg} alt=""/></div>
                <p className="title">{item.Title}</p>
              </div>
              <div className="M-Stock">
                <p className="address">{item.Location}</p>
                <p className="stock">Stock: {item.Stock}</p>
              </div>
            </div>
          ))}

        </div>
      </main>
    </>
  );
}

export default DashBoard;
