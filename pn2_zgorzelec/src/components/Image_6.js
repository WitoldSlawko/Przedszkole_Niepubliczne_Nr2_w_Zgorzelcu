import React from 'react';

let Image_6 = function statelessFunctionComponentClass(props) {

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };
  
  let sectionStyle = {
  width: '200px',
  margin: '10px 5px 0px 5px',
  backgroundImage: "url(" + require("../images/6_Polkolonia/" + props.source) + ")",
  backgroundSize: 'cover'
};

  return (
    //<img src={require('../images/Wystep_przedszkolakow/' + props.source)} style={style} />
    <div className='img' style={sectionStyle}></div>
  );
};

export default Image_6;