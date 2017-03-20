import React from 'react';
import Image from './Image';
import photoSet from '../json/photoSet.json';

let PhotoBook = React.createClass({
  createImage: function (image) {
    return <Image source={image} key={image} />;
  },

  createImages: function (images) {
    return images.map(this.createImage);
  },

  render: function () {
    return (
      <div>
        {this.createImages(photoSet.images)}
      </div>
    );
  }
});

export default PhotoBook;

/*
  <div className="photo_container">
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.createImages(data.images)}

          </div>
        </div>
      </div>
*/