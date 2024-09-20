import '../styles/card.css';

const Profile = ({name, position, aboutMe, myWords, linkedin, github, medium, cvLink, profileImage }) => {
    return(
        <div className="descripcion">
            <div className="image">
                <img src={profileImage} alt=""/>
            </div>
            <h1>{name}</h1>
            <h2>{position}</h2>
            <p>{aboutMe}</p>
            <br/>
            <h3>{myWords}</h3>
            <div className="icons">
                <a href={linkedin} className="hover-text" target="_blank">
                    <span className="tooltip-text" id="fade">
                        LinkedIn
                    </span>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href={github} className="hover-text" target="_blank">
                    <span className="tooltip-text" id="fade">
                        GitHub
                    </span>
                    <i className="bi bi-github"></i>
                </a>
                <a href={medium} className="hover-text" target="_blank">
                    <span className="tooltip-text" id="fade">
                        Medium
                    </span>
                    <i className="bi bi-medium"></i>
                </a>
                <a href={cvLink} className="hover-text" target="_blank">
                    <span className="tooltip-text" id="fade">
                        Resume
                    </span>
                    <i className="bi bi-file-earmark-arrow-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Profile
