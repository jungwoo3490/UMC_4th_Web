const LoginBox = () => {
    return (
        <div className="LoginBox">
            <div className="mainform">
                <div className="loginform">
                    <h1 className="logintext">로그인</h1>
                    <div className="logininputformdiv">
                        <input className="logininputform" type="text" name="" placeholder="이메일 주소 또는 전화번호"/>
                    </div>
                    <div className="logininputformdiv">
                        <input className="logininputform" type="text" name="" placeholder="비밀번호" />
                    </div>
                    <button className="bigloginbutton">로그인</button>
                    <div className="loginforhelp">
                        <input type="checkbox" className="logincheckbox" />
                        <span className="savelogininfo">로그인 정보 저장</span>
                        <span>도움이 필요하신가요?</span>
                    </div>
                </div>
                <div className="subtext">
                    <div className="signupnow">
                        Netflix 회원이 아닌가요? 
                        <a href="">지금 가입하세요.</a>
                    </div>
                    <div className="recaptcha">
                        <p>
                            <span>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</span>
                            &nbsp;
                            <a href="">자세히 알아보기.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginBox;