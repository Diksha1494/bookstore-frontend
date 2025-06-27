import React from 'react';
import './Banner.css'; // Import CSS
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-image-wrapper">
        <img src={bannerImg} alt="Banner" className="banner-image" />
      </div>

      <div className="banner-content">
        <h1 className="banner-title">New Releases This Week</h1>
        <p className="banner-description">
          It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
