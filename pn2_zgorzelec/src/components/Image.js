import React from 'react';

let Image = function statelessFunctionComponentClass(props) {

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };

  return (
    <img src={require('../images/test/' + props.source)} style={style} />
  );
};

export default Image;