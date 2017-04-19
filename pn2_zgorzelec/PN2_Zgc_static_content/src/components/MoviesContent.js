import React from 'react';
    
class MoviesContent extends React.Component {
render() {
    return (
        <div className="wideoteka">
          <iframe width="854" height="480" src="https://www.youtube.com/embed/G4olkuWrk6I" frameborder="0" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/Op-M_nIwEis" frameborder="0" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/AGJ_Jw3Zqmc" frameborder="0" allowfullscreen></iframe>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/OQUTXHyUWl4" frameborder="0" allowfullscreen></iframe>
        </div>
    );
}
}
export default MoviesContent;

/*

let styl = {
      position:'relative',
      height:'0',
      paddingBottom:'56.21%'
    }
    
    let styll = {
      position:'absolute',
      width:'100%',
      height:'100%',
      left:'0',
      width:'641px', 
      height:'360px'
    }
    
    class OfferContent extends React.Component {
render() {
    return (
        <div style={styl}>
          <iframe src="https://www.youtube.com/embed/X7kZVH849Eo?ecver=2" style={styll}></iframe>
        </div>
    );
}
}
export default OfferContent;

*/