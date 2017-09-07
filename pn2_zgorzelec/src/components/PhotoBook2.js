import React from 'react';
import Image2 from './Image2';
import photoSet2 from '../json/photoSet2.json';

export default class PhotoBook2 extends React.Component{
  
  createImage(image) {
    return <Image2 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet2.images)}
      </div>
    );
  }
};
