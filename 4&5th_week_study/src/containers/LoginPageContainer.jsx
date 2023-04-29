import HeaderBar from "../components/HeaderBar";
import HeaderScreen from "../components/HeaderScreen";
import LoginBox from "../components/LoginBox";
import LoginPageScreen from "../components/LoginPageScreen";

const LoginPageContainer = () => {
    return (
        <div className="LoginPageContainer">
            <HeaderBar/>
            <LoginPageScreen />
            <LoginBox />
        </div>
    )
};

export default LoginPageContainer;