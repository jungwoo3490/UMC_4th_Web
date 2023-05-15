
import TableRow from "../components/TableRow";
import LanguageButton from "../components/LanguageButton";

const FooterContainer = () => {
    return (
        <div className="FooterContainer">
            <div id="lastpagewrapper">
                <div id="footercontainer1">
                    <span id="questiontext">질문이 있으신가요? 문의 전화: </span>
                    <a href="" id="phonenum">080-001-9587</a>
                </div>
                <div id="footercontainer2">
                    <TableRow leftText={"자주 묻는 질문"} centerText={"고객 센터"} rightText={"계정"} />
                    <TableRow leftText={"미디어 센터"} centerText={"투자 정보(IR)"} rightText={"입사 정보"} />
                    <TableRow leftText={"넷플릭스 지원 디바이스"} centerText={"이용 약관"} rightText={"개인정보 처리방침"} />
                    <TableRow leftText={"쿠키 설정"} centerText={"회사 정보"} rightText={"문의하기"} />
                    <TableRow leftText={"속도 테스트"} centerText={"법적 고지"} rightText={"오직 넷플릭스에서"} />
                </div>
                <div id="footercontainer3">
                    <LanguageButton />
                </div>
                <div id="footercontainer4">넷플릭스, 대한민국</div>
                <div id="footercontainer5">
                    <div id="textblock1">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</div>
                    <div id="textblock2">대표: 레지널드 숀 톰프슨</div>
                    <div id="textblock3">이메일 주소: korea@netflix.com</div>
                    <div id="textblock4">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                    <div id="textblock5">사업자등록번호: 165-87-00119</div>
                    <div id="textblock6">클라우드 호스팅: Amazon Web Services Inc.</div>
                    <div id="textblock"><a href="" id="kftc">공정거래위원회 웹사이트</a></div>
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;