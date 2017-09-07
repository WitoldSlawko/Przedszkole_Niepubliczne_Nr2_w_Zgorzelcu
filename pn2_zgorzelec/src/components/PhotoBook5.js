import React from 'react';
import Image5 from './Image5';
import photoSet5 from '../json/photoSet5.json';

export default class PhotoBook5 extends React.Component{
  
  createImage(image) {
    return <Image5 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet5.images)}
      </div>
    );
  }
};
