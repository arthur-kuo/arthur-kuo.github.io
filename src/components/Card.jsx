import '../styles/card.css';

const Card = ({ children }) => {
    return (
        <div className="container">
                {children}
        </div>
    );
};

export default Card;
