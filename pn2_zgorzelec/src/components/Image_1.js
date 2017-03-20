import React from 'react';

let Image_1 = function statelessFunctionComponentClass(props) {

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };

  return (
    <img src={require('../images/Wystep_przedszkolakow/' + props.source)} style={style} />
  );
};

export default Image_1;