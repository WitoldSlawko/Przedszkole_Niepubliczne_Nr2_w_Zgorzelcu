import React from 'react';
import Image3 from './Image3';
import photoSet3 from '../json/photoSet3.json';

export default class PhotoBook3 extends React.Component{
  
  createImage(image) {
    return <Image3 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet3.images)}
      </div>
    );
  }
};
