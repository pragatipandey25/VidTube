import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/Streamify.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search/${encodeURIComponent(query)}`);
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-left">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setSidebar((prev) => !prev)}
        />

        <Link to="/" aria-label="Streamify Home">
          <img className="logo" src={logo} alt="Streamify Logo" />
        </Link>
      </div>

      <div className="nav-middle">
        <form className="search-box" onSubmit={handleSearch} role="search">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Search Streamify"
          />
          <button
            type="submit"
            className="search-btn"
            aria-label="Submit search"
          >
            <img src={search_icon} alt="Search" />
          </button>
        </form>
      </div>

      <div className="nav-right">
        <img
          className="nav-icon upload-icon"
          src={upload_icon}
          alt="Upload video"
        />
        <img className="nav-icon apps-icon" src={more_icon} alt="Apps" />
        <img
          className="nav-icon notifications-icon"
          src={notification_icon}
          alt="Notifications"
        />
        <img className="profile-icon" src={profile_icon} alt="Your profile" />
      </div>
    </nav>
  );
};

export default Navbar;
