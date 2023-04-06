import EmailBox from "./EmailBox";

const HeaderBox = () => {
    return (
        <div className="HeaderBox">
            <h1 id="maincontainertext">영화와 시리즈를 무제한으로.</h1>
            <p id="maincontainersubtext" style="color: white; font-size: 1.5rem; font-weight: 400; margin-top: 25px; margin-bottom: 0px;">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
            <div id="maininnercontainer">
                <div id="maininnerdiv">
                    <h3 id="maininnercontainertext" style="color: white; margin: 0px; font-size: 1.25rem; font-weight: 400;">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                    <EmailBox />
                </div>
            </div>
        </div>
    );
};

export default HeaderBox;