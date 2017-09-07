import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    // require()
    require("../images/2_Wystep_w_MDK/DSC_0059.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0060.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0061.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0062.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0063.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0064.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0065.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0066.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0067.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0068.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0071.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0072.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0074.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0075.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0076.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0077.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0078.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0079.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0080.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0081.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0082.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0083.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0084.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0085.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0087.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0088.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0089.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0090.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0091.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0092.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0094.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0095.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0096.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0097.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0098.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0099.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0100.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0101.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0102.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0103.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0104.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0105.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0106.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0108.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0109.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0112.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0114.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0115.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0118.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0119.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0120.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0121.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0122.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0123.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0124.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0125.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0127.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0129.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0130.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0131.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0132.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0133.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0134.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0135.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0136.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0137.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0138.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0139.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0140.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0141.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0142.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0145.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0146.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0150.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0154.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0155.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0156.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0157.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0158.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0159.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0160.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0164.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0165.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0166.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0167.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0168.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0171.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0172.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0173.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0174.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0175.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0176.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0178.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0180.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0182.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0184.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0185.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0186.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0188.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0189.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0190.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0192.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0193.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0195.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0196.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0198.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0199.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0200.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0201.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0202.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0203.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0205.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0206.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0207.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0208.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0209.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0210.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0211.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0212.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0213.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0214.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0215.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0216.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0217.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0218.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0220.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0221.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0222.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0224.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0225.jpg"),
    require("../images/2_Wystep_w_MDK/DSC_0226.jpg")
];
 
export default class LightBox2 extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
 
        return (
            <div>
                <button
                    type="button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Otwórz galerię: Występ w MDK
                </button>
 
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        );
    }
}