import React, { Component } from 'react';

//import external file
import Header     from './partial/header';
import Banner     from './partial/banner';
import Services   from './partial/services';
import Services1   from "./partial/services1";
// import Portfolio  from './partial/portfolio';
// import About      from './partial/about';
import Contact    from './partial/contact';
import Carousel   from './partial/carousel1';

export default class Home extends Component {
  render() {
    return (
        <div className="content">
            <Header />
            <Banner />
            <Services />
            <Carousel />
            <Services1 />
            <Contact />
        </div>
    );
  }
}
