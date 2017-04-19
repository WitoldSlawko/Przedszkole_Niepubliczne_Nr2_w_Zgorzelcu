import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    require("../images/1_Wystep_przedszkolakow/DSC08373.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08374.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08375.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08376.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08377.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08378.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08379.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08380.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08381.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08383.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08386.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08387.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08389.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08390.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08391.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08392.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08393.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08394.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08395.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08396.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08397.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08398.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08399.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08400.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08401.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08402.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08403.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08404.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08405.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08406.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08407.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08408.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08409.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08410.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08411.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08412.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08413.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08414.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08415.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08416.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08417.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08418.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08419.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08420.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08421.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08422.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08423.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08424.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08425.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08426.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08427.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08428.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08429.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08430.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08431.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08432.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08433.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08434.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08435.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08436.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08437.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08438.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08439.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08440.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08441.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08442.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08443.jpg"),
    require("../images/1_Wystep_przedszkolakow/DSC08444.jpg")
];
 
export default class LightBox_1 extends Component {
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
                    Otwórz galerię: Występ przedszkolaków
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
