import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> B's Kitchen App
      </p>
      <div className="app-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </section>
  );
};

export default AppDownload;
