import '../css/title.css';

const Title = ({ text }) => {
    return (
        <div className="section-title-container">
            <div className="line1"></div>
            <h2 className="section-title">{text}</h2>
            <div className="line2"></div>
        </div>
    );
};

export default Title;