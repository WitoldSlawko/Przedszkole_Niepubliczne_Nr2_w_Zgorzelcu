import React from 'react';
import Image_5 from './Image_5';
import photoSet_5 from '../json/photoSet_5.json';

class PhotoBook_5 extends React.Component{
  
  createImage(image) {
    return <Image_5 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_5.images)}
      </div>
    );
  }
};

export default PhotoBook_5;