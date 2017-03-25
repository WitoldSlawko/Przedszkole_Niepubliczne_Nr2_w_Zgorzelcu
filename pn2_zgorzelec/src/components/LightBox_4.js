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
   /* require("../images/Wystep_przedszkolakow/DSC08373.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08374.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08375.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08376.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08377.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08378.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08379.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08380.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08381.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08383.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08386.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08387.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08389.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08390.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08391.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08392.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08393.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08394.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08395.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08396.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08397.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08398.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08399.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08400.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08401.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08402.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08403.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08404.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08405.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08406.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08407.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08408.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08409.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08410.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08411.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08412.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08413.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08414.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08415.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08416.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08417.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08418.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08419.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08420.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08421.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08422.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08423.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08424.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08425.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08426.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08427.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08428.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08429.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08430.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08431.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08432.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08433.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08434.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08435.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08436.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08437.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08438.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08439.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08440.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08441.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08442.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08443.jpg"),
    require("../images/Wystep_przedszkolakow/DSC08444.jpg")
    */
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
                    Open Lightbox
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