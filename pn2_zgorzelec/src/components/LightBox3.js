import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    require("../images/3_Jaselka_w_przedszkolu/DSC02719.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02720.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02722.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02724.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02725.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02726.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02727.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02731.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02732.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02733.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02736.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02738.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02743.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02744.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02747.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02748.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02749.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02750.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02752.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02754.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02755.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02756.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02757.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02759.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02760.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02761.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02763.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02765.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02767.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02774.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02777.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02785.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02786.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02793.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02794.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02799.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02802.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02803.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02804.jpg"),
    require("../images/3_Jaselka_w_przedszkolu/DSC02805.jpg")
];
 
export default class LightBox3 extends Component {
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
                    Otwórz galerię: Jasełka w przedszkolu
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