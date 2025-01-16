import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './DashBoard.css';
import Ownfieldbg from './Ownfieldbg.png';
import searchIcon from './search.png';
import cartIcon from './cart.png';
import manu from './manu.png';
import { useNavigate } from 'react-router-dom';
import home from './home.png';
import dashboard from './dashboard.png';
import contact from './contact.png';
import cart from './cart.png';
import message from './message.png';
import setting from './setting.png';
import upload from './upload.png';
import thumbnail from './thumbnail.png';
import shopping from './shopping.png';
import sample1 from './sample1.jpg'
import sample2 from './sample2.jpg'
import sample3 from './sample3.jpg'
import sample4 from './sample4.jpg'
import sample5 from './sample5.jpg'
import sample6 from './sample6.jpg'
import sample7 from './sample7.jpg'
import sample8 from './sample8.jpg'
import sample9 from './sample9.jpg'
import sample10 from './sample10.jpg'
import sample11 from './sample11.jpg'
import sample12 from './sample12.jpg'
import sample13 from './sample13.jpg'
import sample14 from './sample14.jpg'
import sample15 from './sample15.jpg'
import sample16 from './sample16.jpg'

export function DashBoard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [isOpen, setNavBar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const handleSideBarToggle = () => {
    setNavBar((prev) => !prev);
  };

  // Handle Search
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
  };

  // Navigation Functions
  const handleCreate = () => navigate('/upload');
  const updateLocation = () => console.log('Update location clicked');
  const handleOrders = () => console.log('Orders clicked');
  const handleCart = () => console.log('Cart clicked');

  // Fetch Items
  const fetchItems = async () => {
    try {
      const res = await axios.get('https://ownfield-f0187-default-rtdb.firebaseio.com/public.json');
      const data = res.data;
      const itemsArray = data ? Object.values(data) : [];
      setItems(itemsArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div id="homePage">
        <div id="navbarHome">
          {/* Sidebar Menu */}
          <div id="H-Manu">
            <button onClick={handleSideBarToggle}><img src={manu} alt="Menu" /></button>
          </div>

          <div className="toggleSidebar">
            <button onClick={() => navigate('/Home')}>
              <img className='sliderImg' src={home} alt="Home" />
              <span className="headPhoto">Home</span>
            </button>
            <button onClick={() => navigate('/dashboard')}>
              <img className='sliderImg' src={dashboard} alt="DashBoard" />
              <span className="headPhoto">DashBoard</span>
            </button>
            <button onClick={() => navigate('/message')}>
              <img className='sliderImg' src={message} alt="Message" />
              <span className="headPhoto">Message</span>
            </button>
            <button onClick={() => navigate('/shopping')}>
              <img className='sliderImg' src={shopping} alt="Cart" />
              <span className="headPhoto">Cart</span>
            </button>
            <button onClick={() => navigate('/upload')}>
              <img className='sliderImg' src={upload} alt="Upload" />
              <span className="headPhoto">Upload</span>
            </button>
            <button onClick={() => navigate('/contact')}>
              <img className='sliderImg' src={contact} alt="Contact" />
              <span className="headPhoto">Contact</span>
            </button>
            <button onClick={() => navigate('/setting')}>
              <img className='sliderImg' src={setting} alt="Setting" />
              <span className="headPhoto">Setting</span>
            </button>
          </div>
        </div>

        <div id="container">
          <header id="headering">
            <div className="header-container">
              {/* Logo */}
              <div id="H-img">
                <img src={Ownfieldbg} alt="OwnField Logo" />
              </div>
              {/* Location */}
              <div id="H-Location">
                <p id="location">
                  Alwar<br />
                  <button onClick={updateLocation}>Update location</button>
                </p>
              </div>
              {/* Search */}
              <div id="H-Search">
                <form onSubmit={handleSearch}>
                  <div className="search-box">
                    <input  type="search" id="search" placeholder="Search Here"  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button id="searchButton" type="submit" aria-label="Search">
                      <img src={searchIcon} alt="Search Icon" />
                    </button>
                  </div>
                </form>
              </div>
              {/* Language Selector */}
              <div id="H-Language">
                <select name="language" id="language">
                  <option value="English">English</option>
                </select>
              </div>
              {/* Buttons */}
              <div id="H-Create">
                <button onClick={handleCreate}>Create</button>
              </div>
              <div id="H-Orders">
                <button onClick={handleOrders}>Messages</button>
              </div>
              <div id="H-Cart">
                <button onClick={handleCart} aria-label="View Cart">
                  <img src={cartIcon} alt="Cart Icon" />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main id="main">
            <div id="Main-Container">


            {/* sample images */}


              <div className="box">
                <div className="M-Img">
                  <img src={thumbnail} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>
              
              <div className="box">
                <div className="M-Img">
                  <img src={sample1} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample2} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample3} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample4} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample5} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample6} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample7} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample8} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample9} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample10} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample11} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample12} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample13} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample14} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>

              <div className="box">
                <div className="M-Img">
                  <img src={sample15} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>
              <div className="box">
                <div className="M-Img">
                  <img src={sample16} alt="Thumbnail" width="1280px" height="720px" />
                </div>
                <div className="M-Title">
                  <div className="Img-Title">
                    <img src={Ownfieldbg} alt="Logo" />
                  </div>
                  <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                </div>
                <div className="M-Stock">
                  <p className="address">Alwar</p>
                  <p className="stock">Stock: 20Kg</p>
                </div>
              </div>


              {/* end sample exaple */}

              {/* Render Items */}
              {items.map((item, index) => (
                <div className="box" key={index}>
                  <div className="M-Img">
                    <img
                      src={item.Files && item.Files.length > 0 ? item.Files[0] : thumbnail}
                      alt="Thumbnail"
                      width="1280px"
                      height="720px"
                    />
                  </div>
                  <div className="M-Title">
                    <div className="Img-Title">
                      <img src={Ownfieldbg} alt="Logo" />
                    </div>
                    <p className="title">{item.Title}</p>
                  </div>
                  <div className="M-Stock">
                    <p className="address">{item.Location}</p>
                    <p className="stock">Stock: {item.Stock} Kg</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
