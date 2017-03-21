/*
import React from 'react';
import ReactDOM from 'react-dom';

class OfferContent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Offer Content
      </div>
    );
  }
}

export default OfferContent;
*/
import React from 'react';
//import { DefaultPlayer as Video } from 'react-html5video';
//import 'react-html5video/dist/styles.css';
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

/*<Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src="https://www.youtube.com/watch?v=X7kZVH849Eo" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
*/

/*
position:absolute;width:100%;height:100%;left:0" width="641" height="360"<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/X7kZVH849Eo?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" allowfullscreen></iframe></div>
*/