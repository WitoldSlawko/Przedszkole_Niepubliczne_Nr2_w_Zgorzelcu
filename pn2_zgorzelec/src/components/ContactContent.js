import React from 'react';
import ReactDOM from 'react-dom';

class ContactContent extends React.Component {
  render() {
    return (
      <div className="kontakt"{...this.props}>
        <p className="kontakt_info">Kontakt</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.492359274769!2d14.99965845101097!3d51.15471037947852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708dc3df8270445%3A0x5df28156f3414421!2sPrzedszkole+Niepubliczne+nr+2!5e0!3m2!1spl!2sus!4v1489848046181"></iframe>
      </div>
    );
  }
}

export default ContactContent;

/*
style={{width: '600', height: '450', frameborder: '0', border:'0'}} 
*/