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
];
 
export default class LightBox6 extends Component {
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
                    Otwórz galerię: Pólkolonia
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