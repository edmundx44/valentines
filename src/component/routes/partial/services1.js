import React, { Component, useRef, useEffect, useState } from "react";
import titleImg from '../../layout/img/dss-title-img.png';

export default class Services1 extends Component {
  
  render() {
    return (
        <div id="services1" className="div-services-sec-3 text-center">
          <div className="container">
            <img className="dss-titleImg" src={titleImg} alt="Explore" />
            <p className={`dss-p-txt animate-dss-head-text}`}>
                
                <span></span>
            </p>
          </div>
          <div className="container-fluid">
            <p className={`ppp-1 dss-fluid-title 1 animate-dss-fluid-head-text'}`}>Z|F</p>
            <p className={`ppp-2 dss-fluid-txt 1 animate-dss-fluid-head-text}`}>
               Pinapangako ko bi habang naa paka sa ako a hindi ako magsasawa, hindi ako mapapagod
               mag hulat sa imo, mananatili parin akong sayong-sayo og higit sa lahat ipaparamdam
               naku sa imoha kung gaano ka ka importante sa buhay ko
                <div className="sss-1">Ingat ka always diha babi</div>
              <span className="sss-2">😘😘mwah mwah !! hihihi</span>
            </p>
          </div>
        </div>
    );
  }
}