import React from 'react';
import PhotoBook_4 from './PhotoBook_4';
import LightBox_4 from './LightBox_4';
import { Link, hashHistory } from 'react-router';

class Gallery_4 extends React.Component {
  
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link style={{ background: 'saddlebrown', color: 'peachpuff' }} onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
        </nav>
          <div className="photo_book"><LightBox_4 /> <PhotoBook_4 /></div>
      </div>
    );
  }
}

export default Gallery_4;
