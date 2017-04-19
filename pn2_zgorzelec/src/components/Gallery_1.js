import React, { Component} from 'react';
import PhotoBook_1 from './PhotoBook_1';
import LightBox_1 from './LightBox_1';
import { Link, hashHistory } from 'react-router';

class Gallery_1 extends Component {
  
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link style={{ background: 'saddlebrown', color: 'peachpuff' }} onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
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
