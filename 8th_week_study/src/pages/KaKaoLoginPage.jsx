import { useLocation, useNavigate } from "react-router-dom";
import { REDIRECT_URI, REST_API_KEY } from "../KakaoLoginData";
import { useEffect } from "react";
import axios from "axios";

const KaKaoLoginPage = () => {
    var mydata = {};
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];
    const getKaKaoToken = () => {
        fetch("https://kauth.kakao.com/oauth/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}}`
        })
        .then(res => res.json())
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('token', data.access_token);
                mydata = getKaKaoUserData(data.access_token);
                console.log(mydata);
                console.log(mydata.kakao_account);
            } else {
                navigate('/');
            }
        });
    };

    const getKaKaoUserData = async token => {
        const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        return await kakaoUser.data;
    };

    useEffect(() => {
        if (!location.search) {
            return;
        }
        getKaKaoToken();
    }, []);
    
    return (
        <div>
            로그인 성공!
        </div>
    )
};

export default KaKaoLoginPage;