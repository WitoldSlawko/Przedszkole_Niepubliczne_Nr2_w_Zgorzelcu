import React from 'react';
import Image_4 from './Image_4';
import photoSet_4 from '../json/photoSet_4.json';

class PhotoBook_4 extends React.Component{
  
  createImage(image) {
    return <Image_4 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_4.images)}
      </div>
    );
  }
};

export default PhotoBook_4;