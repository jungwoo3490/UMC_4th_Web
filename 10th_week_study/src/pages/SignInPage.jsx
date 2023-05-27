import { useForm } from "react-hook-form";


const SignInPage = () => {
    
    const {
        register,
        formState: {errors},
        handleSubmit,
        setError
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="SignInPage">
            <h1 className="signintitle">회원가입</h1>
            <div className="formbox">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="nickname"> 닉네임 </label>
                    <input
                        id="nickname"
                        className="signininput"
                        type="text"
                        placeholder="닉네임을 입력하세요"
                        {...register("nickname", {
                            required: "닉네임은 필수 입력입니다.",
                            minLength: {
                                value: 3,
                                message: "3글자 이상 입력해주세요."
                            },
                            pattern: { // input의 정규식 패턴
                                value: /^[A-za-z0-9가-힣]{3,10}$/,
                                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자', // 에러 메세지
                            }
                        })} 
                    />
                    {errors.nickname && <small role="alert">{errors.nickname.message}</small>}
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email"> 이메일 </label>
                    <input
                        id="email"
                        className="signininput"
                        type="text"
                        placeholder="test@email.com"
                        {...register("email", {
                            required: "이메일은 필수 입력입니다.",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "이메일 형식에 맞지 않습니다."
                            }
                        })} 
                    />
                    {errors.email && <small role="alert">{errors.email.message}</small>}
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        className="signininput"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        {...register("password", {
                            required: "비밀번호는 필수 입력입니다.",
                            pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                                message: "비밀번호는 8~15자 영문/숫자/특수기호 조합이어야 합니다."
                            }
                        })} 
                    />
                    {errors.password && <small role="alert">{errors.password.message}</small>}
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="phone">전화번호</label>
                    <input
                        id="phone"
                        className="signininput"
                        type="text"
                        placeholder="010-XXXX-XXXX"
                        {...register("phone", {
                            required: "전화번호는 필수 입력입니다.",
                            pattern: {
                                value: /^\d{3}-\d{3,4}-\d{4}$/,
                                message: "전화번호 형식에 맞지 않습니다."
                            }
                        })}
                    />
                    {errors.phone && <small role="alert">{errors.phone.message}</small>}
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="birth">생년월일</label>
                    <input
                        id="birth"
                        className="signininput"
                        type="date"
                        placeholder=""
                        {...register("birth", {
                            required: "생년월일을 선택해주세요.",
                        })}
                    />
                    {errors.birth && <small role="alert">{errors.birth.message}</small>}
                </form>
            </div>
        </div>
        
    )
}

export default SignInPage;




