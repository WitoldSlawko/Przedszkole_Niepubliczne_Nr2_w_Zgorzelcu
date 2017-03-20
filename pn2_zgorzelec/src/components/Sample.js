import React from 'react';
import Lightbox from 'react-images';

class Sample extends React.Component {
  render() {
    return (
      <Lightbox
        images={[{ src: require('http://pages.physics.cornell.edu/~myers/teaching/ComputationalMethods/ComputerExercises/Fig/betweenness.gif') }, { src: require('http://pages.physics.cornell.edu/~myers/teaching/ComputationalMethods/ComputerExercises/Fig/betweenness.gif') }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

export default Sample;