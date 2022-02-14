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
            <p className={`ppp-1 dss-fluid-title 1 animate-dss-fluid-head-text'}`}>Aking Tahanan</p>
            <p className={`ppp-2 dss-fluid-txt 1 animate-dss-fluid-head-text}`}>
              To my cute little babi hihihi thank you for coming into my life, for being my tahanan, walo ko nag
              dahom that i needed someone like u kai i've always chosen to be alone sa tuwing nakakabati tag kakapoy ikaw
              lang akong gusto kung makausap kasi dama naku yung payapa sa akong kaugalingon at ikaw yung nagiging pahingahan ko sa 
              napapagod na mundo.
              <div className="sss-1"></div>
              <span className="sss-2"></span>
            </p>
          </div>
        </div>
    );
  }
}
