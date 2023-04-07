const ImageBox = ({ imglink, type }) => {
    if (type === 1) {
        return ( 
            <div className="ImageBox">
                <img src={imglink} alt="" />
                <div id="saveblock">
                    <div id="miniimage">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                    </div>
                    <div id="minitext">
                        <div id="moviename">기묘한 이야기</div>
                        <div id="saving">저장 중...</div>
                    </div>
                    <div id="minianimation"></div>
                    <div></div>
                </div>
            </div>
            
        );
    } else {
        return (
            <div className="ImageBox">
                <img src={imglink} alt="" />
            </div>
        );
    }
};

export default ImageBox;