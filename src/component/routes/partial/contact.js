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
          <p className="dcs-text">Happy Valentine's Day to the most special person in my life</p>
          <p className="p-footer text-center">Template Made by: Herpaul Sajulan | Developer | Test | Edmund Franz Abao</p>
        </div>
      </div>
    );
  }
}
