import React from 'react';
import PhotoBook_5 from './PhotoBook_5';
import LightBox_5 from './LightBox_5';
import { Link, hashHistory } from 'react-router';

class Gallery_5 extends React.Component {
  /*
  constructor(props) {
    super();
    this.state = {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      clicked4: false,
      clicked5: false,
      clicked6: false
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    }
    handleClick1() {
      this.setState({
        clicked1: true,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick2() {
      this.setState({
        clicked1: false,
        clicked2: true,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick3() {
      this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: true,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick4() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: true,
        clicked5: false,
        clicked6: false
     });
    }
    handleClick5() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: true,
        clicked6: false
       });
    }
    handleClick6() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false, 
        clicked4: false,
        clicked5: false,
        clicked6: true
       });
    }
  */
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link style={{ background: 'black', color: 'gold' }}  onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
        </nav>
          <div className="photo_book"><LightBox_5 /> <PhotoBook_5 /></div>
      </div>
    );
  }
}

export default Gallery_5;
