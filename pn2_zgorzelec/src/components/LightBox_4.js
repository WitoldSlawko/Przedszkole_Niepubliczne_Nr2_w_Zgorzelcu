import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    
    require("../images/4_Jaselka_w_MDK/DSC03142.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03146.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03149.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03152.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03153.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03155.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03156.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03157.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03158.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03159.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03160.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03161.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03162.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03163.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03164.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03166.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03167.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03168.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03169.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03170.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03171.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03172.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03173.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03174.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03175.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03176.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03177.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03178.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03179.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03180.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03181.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03184.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03185.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03186.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03187.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03188.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03189.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03191.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03192.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03193.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03194.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03195.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03196.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03197.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03200.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03201.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03202.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03203.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03204.jpg"),
    require("../images/4_Jaselka_w_MDK/DSC03205.jpg")
];
 
export default class LightBox_4 extends Component {
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
                    Otwórz galerię: Jasełka w MDK
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