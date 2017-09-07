import React from 'react';
import Image6 from './Image6';
import photoSet6 from '../json/photoSet6.json';

export default class PhotoBook6 extends React.Component{
  
  createImage(image) {
    return <Image6 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet6.images)}
      </div>
    );
  }
};
