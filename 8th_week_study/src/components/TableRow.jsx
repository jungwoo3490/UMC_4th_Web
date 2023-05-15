const TableRow = ({ leftText, centerText, rightText }) => {
    return (
        <div className="TableRow">
            <div className="sideitem"><a href="" id="faq">{leftText}</a></div>
            <div className="centeritem"><a href="" id="helpcenter">{centerText}</a></div>
            <div className="sideitem"><a href="" id="account">{rightText}</a></div>
        </div>
    );
}

export default TableRow;