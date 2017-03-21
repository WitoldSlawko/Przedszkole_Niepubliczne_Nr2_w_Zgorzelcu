import React from 'react';
import Image_1 from './Image_1';
import photoSet_1 from '../json/photoSet_1.json';

class PhotoBook_1 extends React.Component{
  
  createImage(image) {
    return <Image_1 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet_1.images)}
      </div>
    );
  }
};

export default PhotoBook_1;

/*
let PhotoBook_1 = React.createClass({
  
  createImage: function (image) {
    return <Image_1 source={image} key={image} />;
  },

  createImages: function (images) {
    return images.map(this.createImage);
  },

  render: function () {
    return (
      <div className="photo_book">
        {this.createImages(photoSet_1.images)}
      </div>
    );
  }
});

export default PhotoBook_1;
*/