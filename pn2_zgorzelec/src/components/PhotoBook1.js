import React from 'react';
import Image1 from './Image1';
import photoSet1 from '../json/photoSet1.json';

export default class PhotoBook1 extends React.Component{
  
  createImage(image) {
    return <Image1 source={image} key={image} />;
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="photos">
        {this.createImages(photoSet1.images)}
      </div>
    );
  }
};

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