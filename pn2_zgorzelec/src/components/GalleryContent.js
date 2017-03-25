import React from 'react';

import PhotoBook_1 from './PhotoBook_1';
import PhotoBook_2 from './PhotoBook_2';
import PhotoBook_3 from './PhotoBook_3';
import PhotoBook_4 from './PhotoBook_4';
import PhotoBook_5 from './PhotoBook_5';
import PhotoBook_6 from './PhotoBook_6';

import LightBox_1 from './LightBox_1';
import LightBox_2 from './LightBox_2';
import LightBox_3 from './LightBox_3';
import LightBox_4 from './LightBox_4';
import LightBox_5 from './LightBox_5';
import LightBox_6 from './LightBox_6';

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
          {this.state.clicked2 ? <div className="photo_book"><LightBox_2 /> <PhotoBook_2 /></div> : null}
          {this.state.clicked3 ? <div className="photo_book"><LightBox_3 /> <PhotoBook_3 /></div> : null}
          {this.state.clicked4 ? <div className="photo_book"><LightBox_4 /> <PhotoBook_4 /></div> : null}
          {this.state.clicked5 ? <div className="photo_book"><LightBox_5 /> <PhotoBook_5 /></div> : null}
          {this.state.clicked6 ? <div className="photo_book"><LightBox_6 /> <PhotoBook_6 /></div> : null}
        
        <div className="presenter"></div>
      </div>
    );
  }
}

export default GalleryContent;

/*

          {this.state.clicked2 ? <div>Występ w MDK</div> : null}
          {this.state.clicked3 ? <div>Jasełka w przedszkolu</div> : null}
          {this.state.clicked4 ? <div>Jasełka w MDK</div> : null}
          {this.state.clicked5 ? <div>Wyvieczka</div> : null}
          {this.state.clicked6 ? <div>Półkolonia</div> : null}
*/
