import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import './Navbar.css';
import { useSelector } from 'react-redux';
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from '../components/DarkModeToggle';


const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "CartPage", href: "/cart" },
  { name: "Check Out", href: "/checkout" },

];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Left */}
        <div className="navbar-left">
          <Link to="/">
            <HiMiniBars3CenterLeft className="icon" />
          </Link>
          <div className="search-container">
            <IoSearchOutline className="search-icon" />
            <input className="search-input" type="text" placeholder="Search here" />
          </div>
         
        </div>

        {/* Right */}
        <div className="navbar-right">
        <DarkModeToggle/>
          <div className="user-avatar">
            {
              currentUser ? (
                <>



                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="avatar-button"
                  >
                    <img src={avatarImg} alt="avatar" className={`avatar ${currentUser ? 'avatar-active' : ''}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <ul>
                        {navigation.map(item => (
                          <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                            <Link to={item.href} className="dropdown-link">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button onClick={handleLogOut} className="logout-button">
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : <Link to="/login"><HiOutlineUser className="icon" /></Link>
            }
          </div>

          <button className="icon-button">
            <HiOutlineHeart className="icon" />
          </button>
           {/* 🔹 Recommendation AI link after search bar */}
<Link to="/recommend" className="recommend-link">
  BooksyAI
</Link>

          <Link to="/cart" className="cart-button">
            <HiOutlineShoppingCart className="cart-icon" />
            <span className="cart-number">{cartItems.length > 0 ? cartItems.length : 0}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
