import React from 'react';
import PhotoBook_1 from './PhotoBook_1';
import LightBox_1 from './LightBox_1';
import { Link, hashHistory } from 'react-router';

class Gallery_1 extends React.Component {
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
          <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
        </nav>
          <div className="photo_book"><LightBox_1 /> <PhotoBook_1 /></div>
      </div>
    );
  }
}

export default Gallery_1;

/*<nav className="nav_2">
          {this.state.clicked1 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick1} to="gallery_1"> >Występ przedszkolaków</Link> : <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>}
          {this.state.clicked2 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link> : <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>}
          {this.state.clicked3 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link> : <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>}
          {this.state.clicked4 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link> :  <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>}
          {this.state.clicked5 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick5} to="gallery_5">Wycieczka</Link> : <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>}
          {this.state.clicked6 ? <Link style={{ background: 'black', color: 'gold' }} onClick={this.handleClick6} to="gallery_6">Półkolonia</Link> : <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>}
        </nav>
*/