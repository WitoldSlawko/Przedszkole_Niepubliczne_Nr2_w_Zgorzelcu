import React from 'react';
//import ReactDOM from 'react-dom';
//import Test from '../img/test/001.jpg';
//import photoSet from '../json/photoSet.json';
//import Image from './Image';
//import PhotoBook from './PhotoBook';
import PhotoBook_1 from './PhotoBook_1';
//import Sample from './Sample';
//import Lightbox from 'react-images';
import LightBox_1 from './LightBox_1';

class GalleryContent extends React.Component {
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
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          {this.state.clicked1 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick1}>Występ przedszkolaków</a> : <a onClick={this.handleClick1}>Występ przedszkolaków</a>}
          {this.state.clicked2 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick2}>Występ w MDK</a> : <a onClick={this.handleClick2}>Występ w MDK</a>}
          {this.state.clicked3 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick3}>Jasełka w przedszkolu</a> : <a onClick={this.handleClick3}>Jasełka w przedszkolu</a>}
          {this.state.clicked4 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick4}>Jasełka w MDK</a> :  <a onClick={this.handleClick4}>Jasełka w MDK</a>}
          {this.state.clicked5 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick5}>Wycieczka</a> : <a onClick={this.handleClick5}>Wycieczka</a>}
          {this.state.clicked6 ? <a style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick6}>Półkolonia</a> : <a onClick={this.handleClick6}>Półkolonia</a>}
        </nav>
        
          {this.state.clicked1 ? <div className="photo_book"><LightBox_1 /> <PhotoBook_1 /></div> : null}
          {this.state.clicked2 ? <div>Występ w MDK</div> : null}
          {this.state.clicked3 ? <div>Jasełka w przedszkolu</div> : null}
          {this.state.clicked4 ? <div>Jasełka w MDK</div> : null}
          {this.state.clicked5 ? <div>Wyvieczka</div> : null}
          {this.state.clicked6 ? <div>Półkolonia</div> : null}
        
        <div className="presenter"></div>
      </div>
    );
  }
}

export default GalleryContent;
