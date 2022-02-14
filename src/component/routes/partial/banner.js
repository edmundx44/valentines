import React, { Component } from 'react';
// import { Rxjs, Observable } from "rxjs";
import { fromEvent } from "rxjs";

//import from external file
import bannerImg from '../../layout/img/banner.png';
import logo from '../../layout/img/logo.png';

// import image1 from '../../layout/img/slider/slider1.jpg';
// import image2 from '../../layout/img/slider/slider2.jpg';
// import image3 from '../../layout/img/slider/slider3.jpg';
//
// const kani = [image1, image2, image3];

export default class Banner extends Component {
  constructor(props){
    super(props);
      this.state = {
        onScroll: true
      };
  }

  componentDidMount(){
    this.setState({ onScroll: false });
      const height = this.divElement.clientHeight;
      const hPercetn = 0.40 * height;
      

        fromEvent(window, 'scroll')
          .subscribe(e => {
            if (window.scrollY > (height - hPercetn) ) {
              this.setState({ onScroll: true });

            } else {
              this.setState({ onScroll: false });
            }
          }
      );
  }
  explore(){
    

  }
  render() {
    // var divStyle = {
    //   backgroundImage: 'url(' + kani[0] + ')',
    //   WebkitTransition: 'all', // note the capital 'W' here
    //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    // };
    return (
      <div id="banner" className="div-banner-sec-1 text-center" ref={ (divElement) => this.divElement = divElement}>
          <div className="main-banner-content"> 
              <img className="img-responsive center-block" src={bannerImg} alt="logo"/>
              <div className="left-line visible-md visible-lg"></div>
              <div className="right-line visible-md visible-lg"></div>
              <div className={`dbs-title-1 valentines ${this.state.onScroll ? 'animate-dbs-t-1' : ''}`}>Happy</div>
              <div className={`dbs-title-2 valentines ${this.state.onScroll ? 'animate-dbs-t-1' : ''}`}>Valentine's</div>
              <div className={`dbs-title-3 valentines ${this.state.onScroll ? 'animate-dbs-t-1' : ''}`}>Day</div>
              <p className="dbs-explore" onClick={this.explore}>Explore<span><img src={logo} alt="logo" /></span></p>
          </div>

            {/* <p className={`dbs-title-1 valentines ${this.state.onScroll ? 'animate-dbs-t-1' : ''}`}>Happy</p>
            <p className={`dbs-title-2 valentines ${this.state.onScroll ? 'animate-dbs-t-2' : ''}`}>Valentine's</p>
            <p className={`dbs-title-3 valentines ${this.state.onScroll ? 'animate-dbs-t-3' : ''}`}>Day</p>
            <p className="dbs-explore" onClick={this.toplok}>Explore<span><img src={logo} alt="logo" /></span></p> */}
            
      </div>
    );
  }
}
