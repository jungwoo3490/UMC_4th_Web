const VideoBox = ({ imglink, videolink, videoType }) => {
    
    if (videoType === 1) {
        return ( 
            <div className="VideoBox">
                <img src={imglink} alt=""/>
                <div id="videocontainer">
                    <video autoPlay playsInline muted loop>
                        <source src={videolink} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="VideoBox">
                <img src={imglink} alt=""/>
                <div id="videocontainer2">
                    <video autoPlay playsInline muted loop>
                        <source src={videolink} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }
};

export default VideoBox;