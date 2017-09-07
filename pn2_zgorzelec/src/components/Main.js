import React, { Component } from 'react'
import Header from './Header'
import LeftAside from './LeftAside';
import RightAside from './RightAside';
import { Link } from 'react-router'

class Main extends Component {
	render() {
		return (
			<div className="container">
      <Header />
      <nav className="nav_1">
        {this.props.click1 ? 
					<Link onClick={this.props.handleClick1} style={{ background: '#1D8787', color: 'peachpuff' }} to="offercontent">Oferta</Link> 
					: 
					<Link onClick={this.props.handleClick1} style={{ background: '#434141', color: '#1D8787' }} to="offercontent">Oferta</Link>}
        {this.props.click2 ? 
					<Link onClick={this.props.handleClick2} style={{ background: '#1D8787', color: 'peachpuff' }} to="gallerycontent">Galeria</Link> 
					: 
					<Link onClick={this.props.handleClick2} style={{ background: '#434141', color: '#1D8787' }} to="gallerycontent">Galeria</Link>}
        {this.props.click3 ? 
					<Link onClick={this.props.handleClick3} style={{ background: '#1D8787', color: 'peachpuff' }} style={{ background: '#1D8787', color: 'peachpuff' }} to="moviescontent">Wideoteka</Link> 
					: 
					<Link onClick={this.props.handleClick3} style={{ background: '#434141', color: '#1D8787' }} to="moviescontent">Wideoteka</Link>}
        {this.props.click4 ? 
					<Link onClick={this.props.handleClick4} style={{ background: '#1D8787', color: 'peachpuff' }} to="contactcontent">Kontakt</Link> 
					: 
					<Link onClick={this.props.handleClick4} style={{ background: '#434141', color: '#1D8787' }} to="contactcontent">Kontakt</Link>}
      </nav>
      <main>
        <LeftAside />
        <div className="content">
          {this.props.textToRender }
        </div>
        <RightAside />
      </main>
      <footer className="foot">
				<p>zapraszamy</p>
			</footer>
    </div>
		)
	}
}

export default Main
