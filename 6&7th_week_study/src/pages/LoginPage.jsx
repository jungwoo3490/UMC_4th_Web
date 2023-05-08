import FooterContainer from "../containers/FooterContainer";
import LoginPageContainer from "../containers/LoginPageContainer";

import { useEffect } from "react";

const LoginPage = () => {

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0];
        titleElement.innerHTML = "로그인 페이지";
        console.log("LoginPage Mount!");
    }, []);

    return (
        <div className="LoginPage">
            <LoginPageContainer />
            <FooterContainer />
        </div>
    )
};

export default LoginPage;