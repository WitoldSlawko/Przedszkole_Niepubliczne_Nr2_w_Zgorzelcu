import React from 'react';

let Image4 = function statelessFunctionComponentClass(props) {
/*
  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };
*/  
  let sectionStyle = {
  width: '200px',
  margin: '10px 5px 0px 5px',
  backgroundImage: "url(" + require("../images/4_Jaselka_w_MDK/" + props.source) + ")",
  backgroundSize: 'cover'
};

  return (
    <div className='img' title="Przytrzymaj by powiększyć" style={sectionStyle}></div>
  );
};

export default Image4;