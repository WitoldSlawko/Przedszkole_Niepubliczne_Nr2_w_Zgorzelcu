import React from 'react';
import Image_3 from './Image_3';
import photoSet_3 from '../json/photoSet_3.json';

class PhotoBook_3 extends React.Component{
  
  createImage(image) {
    return <Image_3 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_3.images)}
      </div>
    );
  }
};

export default PhotoBook_3;