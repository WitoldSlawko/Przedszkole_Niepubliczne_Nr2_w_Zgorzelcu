import React from 'react';
//import { Link, hashHistory } from 'react-router'
/*
import PhotoBook_1 from './PhotoBook_1';
import PhotoBook_2 from './PhotoBook_2';
import PhotoBook_3 from './PhotoBook_3';
import PhotoBook_4 from './PhotoBook_4';
import PhotoBook_5 from './PhotoBook_5';
import PhotoBook_6 from './PhotoBook_6';
import LightBox_1 from './LightBox_1';
import LightBox_2 from './LightBox_2';
import LightBox_3 from './LightBox_3';
import LightBox_4 from './LightBox_4';
import LightBox_5 from './LightBox_5';
import LightBox_6 from './LightBox_6';
*/

class RightAside extends React.Component {
	/*
  constructor(props) {
    super();
    this.state = {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      clicked4: false,
      clicked5: false,
      clicked6: false
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    }
    handleClick1() {
      this.setState({
        clicked1: true,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick2() {
      this.setState({
        clicked1: false,
        clicked2: true,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick3() {
      this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: true,
        clicked4: false,
        clicked5: false,
        clicked6: false
      });
    }
    handleClick4() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: true,
        clicked5: false,
        clicked6: false
     });
    }
    handleClick5() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: true,
        clicked6: false
       });
    }
    handleClick6() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: true
       });
    }
		*/
  render() {
    return (
      <aside className="right_as">
				<div className="kid_frame">
					<div className="kid_topright"></div>
				</div>
				<div className="kid_frame">
					<div className="kid_downright"></div>
				</div>
      </aside>
    );
  }
}

export default RightAside;

/*{this.state.clicked1 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick1} to="gallery_1"> >Występ przedszkolaków</Link> : <Link onClick={this.handleClick1} to="gallery_1">Występ przedszkolaków</Link>}
          {this.state.clicked2 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link> : <Link onClick={this.handleClick2} to="gallery_2">Występ w MDK</Link>}
          {this.state.clicked3 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link> : <Link onClick={this.handleClick3} to="gallery_3">Jasełka w przedszkolu</Link>}
          {this.state.clicked4 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link> : <Link onClick={this.handleClick4} to="gallery_4">Jasełka w MDK</Link>}
          {this.state.clicked5 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick5} to="gallery_5">Wycieczka</Link> : <Link onClick={this.handleClick5} to="gallery_5">Wycieczka</Link>}
          {this.state.clicked6 ? <Link style={{ background: 'lightblue', color: 'darkred' }} onClick={this.handleClick6} to="gallery_6">Półkolonia</Link> : <Link onClick={this.handleClick6} to="gallery_6">Półkolonia</Link>}
	
*/