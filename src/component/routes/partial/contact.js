import React, { Component } from 'react';

//import from external file
import titleImg from '../../layout/img/dss-title-img.png';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="div-contact-sec-5 text-center">
        <div className="container">
          <img className="dcs-titleImg" src={titleImg} alt="Explore" />
          <p className="dcs-heading"></p>
          <p className="dcs-text">I look at you and i do not see an end.</p>
          <p className="dcs-text">only us, beginning and beginning again.</p>
          <p className="dcs-text text-center">---This is forever---</p>
          <p className="dcs-text">💖💖 Happy Valentine's Day 💖💖</p>
          <p className="p-footer text-center">Template Made by: Herpaul Sajulan | Developer | Mod | Edmund Franz Abao</p>
        </div>
      </div>
    );
  }
}
