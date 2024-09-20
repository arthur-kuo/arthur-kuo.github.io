import '../styles/card.css';

const Card = ({ children }) => {
    return (
        <div className="container">
            <div className="card-container">
                {children}
            </div>
        </div>
    );
};

export default Card;
