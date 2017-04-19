import React from 'react';
import Image_2 from './Image_2';
import photoSet_2 from '../json/photoSet_2.json';

class PhotoBook_2 extends React.Component{
  
  createImage(image) {
    return <Image_2 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_2.images)}
      </div>
    );
  }
};

export default PhotoBook_2;