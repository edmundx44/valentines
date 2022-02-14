import React, { Component, useRef, useEffect, useState } from "react";
import titleImg from '../../layout/img/dss-title-img.png';

export default class Services extends Component {
  
  render() {
    return (
        <div id="services" className="div-services-sec-2 text-center">
          <div className="container">
            <img className="dss-titleImg" src={titleImg} alt="Explore" />
            <p className={`dss-p-txt animate-dss-head-text}`}>
               
              <span></span>
            </p>
          </div>
          <div className="container-fluid">
            <p className={`dss-fluid-title 1 animate-dss-fluid-head-text'}`}>Edmund Franz Abao</p>
            <p className={`dss-fluid-txt 1 animate-dss-fluid-head-text}`}>
              Kang Edmund gwapo na message 
              <span></span>
              <span></span>
            </p>
          </div>
        </div>
    );
  }
}
