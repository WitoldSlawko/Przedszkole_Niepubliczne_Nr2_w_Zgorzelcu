import React, { Component} from 'react';
import PhotoBook1 from './PhotoBook1';
import LightBox1 from './LightBox1';
import { Link/*, hashHistory*/ } from 'react-router';

class Gallery1 extends Component {
  
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link style={{ background: '#1D8787', color: 'peachpuff', border: '1px solid black' }} onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
        </nav>
          <div className="photo_book"><LightBox1 /> <PhotoBook1 /></div>
      </div>
    );
  }
}

export default Gallery1;
