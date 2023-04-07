import TextBox from "../components/TextBox";
import VideoBox from "../components/VideoBox";

const VideoTextContainer = ({ imglink, videolink, titleText, contentText, isImageLeft, videoType }) => {
    
    console.log(imglink); // 테스트 코드
    
    if (isImageLeft) {
        return ( 
            <div className="VideoTextContainer">
                <div id="subcontainerwrapper">
                    <VideoBox imglink={imglink} videolink={videolink} videoType={videoType}/>
                    <TextBox  titleText={titleText} contentText={contentText}/>
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="VideoTextContainer">
                <div id="subcontainerwrapper">
                    <TextBox titleText={titleText} contentText={contentText}/>
                    <VideoBox imglink={imglink} videolink={videolink} videoType={videoType}/>
                </div>
            </div>
        );
    }
};

export default VideoTextContainer;