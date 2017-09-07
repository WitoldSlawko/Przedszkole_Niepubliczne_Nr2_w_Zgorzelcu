import React from 'react';
import PhotoBook6 from './PhotoBook6';
import LightBox6 from './LightBox6';
import { Link/*, hashHistory*/ } from 'react-router';

class Gallery6 extends React.Component {
  
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link style={{ background: '#1D8787', color: 'peachpuff', border: '1px solid black'  }} onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
        </nav>
          <div className="photo_book"><LightBox6 /> <PhotoBook6 /></div>
      </div>
    );
  }
}

export default Gallery6;
