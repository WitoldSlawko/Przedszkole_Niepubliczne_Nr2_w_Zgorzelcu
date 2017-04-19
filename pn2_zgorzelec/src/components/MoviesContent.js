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
