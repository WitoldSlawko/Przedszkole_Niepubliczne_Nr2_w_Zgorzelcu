import React from 'react';
import Image_6 from './Image_6';
import photoSet_6 from '../json/photoSet_6.json';

class PhotoBook_6 extends React.Component{
  
  createImage(image) {
    return <Image_6 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_6.images)}
      </div>
    );
  }
};

export default PhotoBook_6;