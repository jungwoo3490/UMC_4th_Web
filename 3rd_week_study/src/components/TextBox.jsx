const TextBox = ({ titleText, contentText }) => {
    return ( 
        <div className="TextBox">
            <h2 id="watchtvmaintext">{titleText}</h2>
            <p id="watchtvsubtext" style={{ marginTop: '16px', color: 'white', fontSize: '1.6rem', fontWeight: 400, wordBreak: 'keep-all' }}>{contentText}</p>
        </div>
    );
};

export default TextBox;