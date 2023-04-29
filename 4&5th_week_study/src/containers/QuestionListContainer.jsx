import { useState, useRef } from "react";
import QuestionListBox from "../components/QuestionListBox";
import EmailBox from "../components/EmailBox";




const QuestionListContainer = () => {

    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false]);

    const containerRef = useRef();
    const listRef = useRef();

    const toggleVisibleBox = (id) => {
        if (isVisible[id] === true) {
            setIsVisible([false, false, false, false, false, false, false]);
            containerRef.current.style.height = "877px";
            listRef.current.style.height = "660px";
        } else {
            const newArray = [false, false, false, false, false, false, false];
            newArray[id] = true;
            setIsVisible(newArray);
            containerRef.current.style.height = "1027px";
            listRef.current.style.height = "830px";
        }
    };

    return (
        <div className="QuestionListContainer" ref={containerRef}>
            <div id="innercontainer">
                <h2 id="frequentlyaskedtext">자주 묻는 질문</h2>
                <div id="listdiv" ref={listRef}>
                    <ul>
                        <li>
                            <QuestionListBox id={0} isVisible={isVisible[0]} questionText={"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?"} 
                            hiddenText1={"넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다."} 
                            hiddenText2={"넷플릭스 콘텐츠를 한번 살펴보세요."} type={2} onClick={() => toggleVisibleBox(0)} />
                        </li>
                        <li>
                            <QuestionListBox id={1} isVisible={isVisible[1]} questionText={"넷플릭스란 무엇인가요?"} 
                            hiddenText1={"넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다."} 
                            hiddenText2={"저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다."} 
                            type={2} onClick={() => toggleVisibleBox(1)} />
                        </li>
                        <li>
                            <QuestionListBox id={2} isVisible={isVisible[2]} questionText={"넷플릭스 요금은 얼마인가요?"} 
                            hiddenText1={"스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다."}  
                            type={1} onClick={() => toggleVisibleBox(2)} />
                        </li>
                        <li>
                            <QuestionListBox id={3} isVisible={isVisible[3]} questionText={"광고형 멤버십은 뭐가 다른가요?"} 
                            hiddenText1={"광고형 멤버십은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 좋아하는 콘텐츠를 스트리밍할 수 있습니다(일부 위치 및 디바이스 제한 적용). 저장 기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수 없습니다."}  
                            type={1} onClick={() => toggleVisibleBox(3)} />
                        </li>
                        <li>
                            <QuestionListBox id={4} isVisible={isVisible[4]} questionText={"어디에서 시청할 수 있나요?"} 
                            hiddenText1={"언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다."}  
                            type={1} onClick={() => toggleVisibleBox(4)} />
                        </li>
                        <li>
                            <QuestionListBox id={5} isVisible={isVisible[5]} questionText={"멤버십을 해지하려면 어떻게 하나요?"} 
                            hiddenText1={"넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요."}  
                            type={1} onClick={() => toggleVisibleBox(5)} />
                        </li>
                        <li>
                            <QuestionListBox id={6} isVisible={isVisible[6]} questionText={"아이들이 넷플릭스를 봐도 좋을까요?"} 
                            hiddenText1={"멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다."} 
                            hiddenText2={"키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다."}  type={2} onClick={() => toggleVisibleBox(6)} />
                        </li>
                    </ul>
                </div>
                <div id="maininnercontainer">
                    <div id="maininnerdiv">
                        <h3 id="maininnercontainertext" style={{ color: "white", margin: "0px", fontSize: "1.25rem", fontWeight: 400 }}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                        <EmailBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionListContainer;