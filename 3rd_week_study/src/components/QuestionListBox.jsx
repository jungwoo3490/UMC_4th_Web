import React, { useState } from "react";

const QuestionListBox = ({ id, isVisible, questionText, hiddenText1, hiddenText2, type, onClick }) => {
    console.log(`visibleDiv는 ${isVisible}입니다.`);
    console.log(`${id}번째입니다.`);

    if (isVisible === true) {
        if (type === 2){
            return (
                <div className={`QuestionListBox`}>
                    <div id="listcontent">
                        <button className="listbutton" onClick={onClick}>
                            <span id="watchcontenttext">{questionText}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-1bzktvf e1tuurd64" data-name="Add" alt="">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`hiddenlistcontent${id + 1}`}>
                        <span id="hiddenfirsttext">{hiddenText1}</span>
                        <br/>
                        <br/>
                        <a href="" id="hiddenfirstanchor">{hiddenText2}</a>
                    </div>
                </div>
            );
        } else {
            return(
                <div className={`QuestionListBox`}>
                    <div id="listcontent">
                        <button className="listbutton" onClick={onClick}>
                            <span id="watchcontenttext">{questionText}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-1bzktvf e1tuurd64" data-name="Add" alt="">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`hiddenlistcontent${id + 1}`}>
                        <span id="hiddenfirsttext">{hiddenText1}</span>
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className={`QuestionListBox`}>
                <div id="listcontent">
                    <button className="listbutton" onClick={onClick}>
                        <span id="watchcontenttext">{questionText}</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-1bzktvf e1tuurd64" data-name="Add" alt="">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default QuestionListBox;