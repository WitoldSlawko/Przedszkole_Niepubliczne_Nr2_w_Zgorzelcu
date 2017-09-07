import React from 'react';

let Image_1 = function statelessFunctionComponentClass(props) {
/*
  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };
*/
  let sectionStyle = {
  width: '200px',
  margin: '10px 5px 0px 5px',
  backgroundImage: "url(" + require("../images/1_Wystep_przedszkolakow/" + props.source) + ")",
  backgroundSize: 'cover'
};

  return (
    <div className='img' title="Przytrzymaj by powiększyć" style={sectionStyle}></div>
  );
};

export default Image_1;