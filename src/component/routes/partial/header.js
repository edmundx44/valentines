import React, { Component } from 'react';
import { fromEvent } from "rxjs";
import AnchorLink from 'react-anchor-link-smooth-scroll';

//import from external file
import logo from '../../layout/img/logo.png';

export default class Header extends Component {
  constructor(props){
    super(props);
      this.state = {
        onScroll: false,
        toogleNav : false
      };
  }
  componentDidMount(){
    this.scrollFunction();
    this.resizeFunction();

  }
  scrollFunction(){
    fromEvent(window, "scroll").subscribe((e) => {
        if (window.scrollY > 100) {
            this.setState({ onScroll: true });
        } else {
            this.setState({ onScroll: false });
        }
    });
  }
  resizeFunction(){
    fromEvent(window, "resize").subscribe((e) => {
        if (window.innerWidth > 650) {
            this.setState({ toogleNav: false });
        }
    });
  }
  showNav(){
    if (this.state.toogleNav === false){
       this.setState({ toogleNav: true });
    }else {
      this.setState({ toogleNav: false });
    }
  }

  render() {
    return (
      <div className={`div-header-section ${this.state.onScroll ? 'dhs-resize' : ''}`}>
        <div className="container">
          <div className="col-md-4">
            <div className="text-left">
              <a href="/" className="logo"><img src={logo} alt="logo" /> Zenneth | Franz</a>
            </div>
            <div className="text-right hidden-md hidden-lg">
              <button className="display-side-nav" onClick={this.showNav.bind(this)}><i className="fa fa-bars"></i></button>
            </div>
          </div>
          <div className="col-md-8 visible-md visible-lg">
            <div className="menu">
              <AnchorLink href='#banner'>Home</AnchorLink>
              <AnchorLink href='#services'>Edmund</AnchorLink>
              <AnchorLink href='#services1'>Zenneth</AnchorLink>
              <AnchorLink href='#contact'>About</AnchorLink>
            </div>
          </div>
        </div>
        <div className={`div-side-bar-section ${this.state.toogleNav ? 'side-nav-view' : ''}`}>
          construction
        </div>
      </div>
    );
  }
}
