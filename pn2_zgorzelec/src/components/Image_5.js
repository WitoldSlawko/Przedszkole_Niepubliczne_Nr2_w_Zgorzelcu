import React from 'react';

let Image_5 = function statelessFunctionComponentClass(props) {

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };
  
  let sectionStyle = {
  width: '200px',
  margin: '10px 5px 0px 5px',
  backgroundImage: "url(" + require("../images/5_Wycieczka/" + props.source) + ")",
  backgroundSize: 'cover'
};

  return (
    <div className='img' style={sectionStyle}></div>
  );
};

export default Image_5;