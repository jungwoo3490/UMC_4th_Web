const EmailBox = () => {
    return (
        <div className="EmailBox">
            <input type="text" name="" id="emailinput" placeholder="이메일 주소" />
            <button id="emailbutton">
                <div id="buttontext">
                    <span id="starttext">시작하기</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="ChevronRight">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path>
                    </svg>
                </div>
            </button>
        </div>
    );

};

export default EmailBox;