import '../styles/card.css';

const Profile = ({name, position, aboutMe, linkedin, github, cvLink, profileImage }) => {
    return(
        <div className="card-container">
            <div className="descripcion">
                <h1>{name}</h1>
                <h2>{position}</h2>
                <p>{aboutMe}</p>
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
                    <a href={cvLink} className="hover-text" target="_blank">
                        <span className="tooltip-text" id="fade">
                            Resume
                        </span>
                        <i className="bi bi-file-earmark-arrow-down"></i>
                    </a>
                </div>
            </div>
            <div className="image">
                <img src={profileImage} alt=""/>
            </div>
        </div>
    )
}

export default Profile
