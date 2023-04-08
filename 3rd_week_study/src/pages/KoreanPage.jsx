import HeaderContainer from "../containers/HeaderContainer";
import ImageTextContainer from "../containers/ImageTextContainer";
import QuestionListContainer from "../containers/QuestionListContainer";
import VideoTextContainer from "../containers/VideoTextContainer";

const KoreanPage = () => {

    const container1 = {
        imglink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        videolink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
        titleText: "TV로 즐기세요.",
        contentText: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
        isImageLeft: false,
        videoType: 1
    };

    const container2 = {
        imglink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
        videolink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
        titleText: "다양한 디바이스에서 시청하세요.",
        contentText: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.",
        isImageLeft: true,
        videoType: 2
    };

    const container3 = {
        imglink: "https://occ-0-3683-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf",
        titleText: "어린이 전용 프로필을 만들어 보세요.",
        contentText: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
        isImageLeft: false,
        type: 0
    };

    const container4 = {
        imglink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
        titleText: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.",
        contentText: "광고 없는 멤버십에서만 이용 가능합니다",
        isImageLeft: true,
        type: 1
    };


    return (
        <div className="KoreanPage">
            <HeaderContainer />
            <VideoTextContainer {...container1}/>
            <VideoTextContainer {...container2}/>
            <ImageTextContainer {...container3}/>
            <ImageTextContainer {...container4}/>
            <QuestionListContainer />
        </div>
    );
};

export default KoreanPage;