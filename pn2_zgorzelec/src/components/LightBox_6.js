import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    require("../images/6_Polkolonia/DSCI0001.jpg"),
    require("../images/6_Polkolonia/DSCI0002.jpg"),
    require("../images/6_Polkolonia/DSCI0003.jpg"),
    require("../images/6_Polkolonia/DSCI0004.jpg"),
    require("../images/6_Polkolonia/DSCI0005.jpg"),
    require("../images/6_Polkolonia/DSCI0006.jpg"),
    require("../images/6_Polkolonia/DSCI0007.jpg"),
    require("../images/6_Polkolonia/DSCI0008.jpg"),
    require("../images/6_Polkolonia/DSCI0009.jpg"),
    require("../images/6_Polkolonia/DSCI0010.jpg"),
    require("../images/6_Polkolonia/DSCI0011.jpg"),
    require("../images/6_Polkolonia/DSCI0012.jpg"),
    require("../images/6_Polkolonia/DSCI0013.jpg"),
    require("../images/6_Polkolonia/DSCI0014.jpg"),
    require("../images/6_Polkolonia/DSCI0015.jpg"),
    require("../images/6_Polkolonia/DSCI0016.jpg"),
    require("../images/6_Polkolonia/DSCI0017.jpg"),
    require("../images/6_Polkolonia/DSCI0018.jpg"),
    require("../images/6_Polkolonia/DSCI0019.jpg"),
    require("../images/6_Polkolonia/DSCI0020.jpg"),
    require("../images/6_Polkolonia/DSCI0021.jpg"),
    require("../images/6_Polkolonia/DSCI0022.jpg"),
    require("../images/6_Polkolonia/DSCI0023.jpg"),
    require("../images/6_Polkolonia/DSCI0024.jpg"),
    require("../images/6_Polkolonia/DSCI0025.jpg"),
    require("../images/6_Polkolonia/DSCI0026.jpg"),
    require("../images/6_Polkolonia/DSCI0027.jpg"),
    require("../images/6_Polkolonia/DSCI0028.jpg"),
    require("../images/6_Polkolonia/DSCI0029.jpg"),
    require("../images/6_Polkolonia/DSCI0030.jpg"),
    require("../images/6_Polkolonia/DSCI0031.jpg"),
    require("../images/6_Polkolonia/DSCI0032.jpg"),
    require("../images/6_Polkolonia/DSCI0033.jpg"),
    require("../images/6_Polkolonia/DSCI0034.jpg"),
    require("../images/6_Polkolonia/DSCI0035.jpg"),
    require("../images/6_Polkolonia/DSCI0036.jpg"),
    require("../images/6_Polkolonia/DSCI0037.jpg"),
    require("../images/6_Polkolonia/DSCI0038.jpg"),
    require("../images/6_Polkolonia/DSCI0039.jpg"),
    require("../images/6_Polkolonia/DSCI0040.jpg"),
    require("../images/6_Polkolonia/DSCI0041.jpg"),
    require("../images/6_Polkolonia/DSCI0042.jpg"),
    require("../images/6_Polkolonia/DSCI0043.jpg"),
    require("../images/6_Polkolonia/DSCI0045.jpg"),
    require("../images/6_Polkolonia/DSCI0046.jpg"),
    require("../images/6_Polkolonia/DSCI0047.jpg"),
    require("../images/6_Polkolonia/DSCI0049.jpg"),
    require("../images/6_Polkolonia/DSCI0050.jpg"),
    require("../images/6_Polkolonia/DSCI0051.jpg"),
    require("../images/6_Polkolonia/DSCI0052.jpg"),
    require("../images/6_Polkolonia/DSCI0053.jpg"),
    require("../images/6_Polkolonia/DSCI0054.jpg"),
    require("../images/6_Polkolonia/DSCI0055.jpg"),
    require("../images/6_Polkolonia/DSCI0056.jpg"),
    require("../images/6_Polkolonia/DSCI0057.jpg"),
    require("../images/6_Polkolonia/DSCI0058.jpg"),
    require("../images/6_Polkolonia/DSCI0059.jpg"),
    require("../images/6_Polkolonia/DSCI0060.jpg"),
    require("../images/6_Polkolonia/DSCI0061.jpg"),
    require("../images/6_Polkolonia/DSCI0062.jpg"),
    require("../images/6_Polkolonia/DSCI0063.jpg"),
    require("../images/6_Polkolonia/DSCI0064.jpg"),
    require("../images/6_Polkolonia/DSCI0065.jpg"),
    require("../images/6_Polkolonia/DSCI0066.jpg"),
    require("../images/6_Polkolonia/DSCI0068.jpg"),
    require("../images/6_Polkolonia/DSCI0070.jpg"),
    require("../images/6_Polkolonia/DSCI0071.jpg"),
    require("../images/6_Polkolonia/DSCI0072.jpg"),
    require("../images/6_Polkolonia/DSCI0073.jpg"),
    require("../images/6_Polkolonia/DSCI0074.jpg"),
    require("../images/6_Polkolonia/DSCI0075.jpg"),
    require("../images/6_Polkolonia/DSCI0076.jpg"),
    require("../images/6_Polkolonia/DSCI0077.jpg"),
    require("../images/6_Polkolonia/DSCI0078.jpg")
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
 
export default class LightBox_6 extends Component {
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