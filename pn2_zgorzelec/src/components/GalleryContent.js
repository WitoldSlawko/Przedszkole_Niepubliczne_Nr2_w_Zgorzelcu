import React from 'react';
import { Link /*, hashHistory*/ } from 'react-router'

class GalleryContent extends React.Component {
  render() {
    return (
      <div className="galeria">
        <nav className="nav_2">
          <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>
          <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>
          <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>
          <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>
          <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>
          <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>
          {this.props.children}
        </nav>
        <div className="gallery_choosing">
          <h1>Wybierz galerię</h1>
        </div>
      </div>
    );
  }
}

export default GalleryContent;
