import React from 'react';
import Image4 from './Image4';
import photoSet4 from '../json/photoSet4.json';

export default class PhotoBook4 extends React.Component{
  
  createImage(image) {
    return <Image4 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet4.images)}
      </div>
    );
  }
};
