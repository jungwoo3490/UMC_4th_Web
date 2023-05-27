import ImageBox from "../components/ImageBox";
import TextBox from "../components/TextBox";

const ImageTextContainer = ({ imglink, titleText, contentText, type, isImageLeft }) => {
    if (isImageLeft) {
        return ( 
            <div className="ImageTextContainer">
                <div className="subcontainerwrapper">
                    <ImageBox imglink={imglink} type={type}/>
                    <TextBox titleText={titleText} contentText={contentText} />
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="ImageTextContainer">
                <div className="subcontainerwrapper">
                    <TextBox titleText={titleText} contentText={contentText} />
                    <ImageBox imglink={imglink} type={type}/>
                </div>
            </div>
        );
    }
};

export default ImageTextContainer;
