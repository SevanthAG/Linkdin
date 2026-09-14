import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="profile-card">

            {/* Cover Image */}
            <div className="profile-cover">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Nm_RN2zTpkzx_ZgODIcK1p7AWakpGUXTWYU43RLdU2H4IdUrc0V8443W&s=10"
                    alt="Cover"
                />
            </div>


            <div className="profile-picture">
                <img
                    src="https://i.pinimg.com/1200x/85/a6/99/85a69912405712de7ecd3762c2d860ac.jpg"
                    alt="Profile"
                />
            </div>


            <div className="profile-info">

                <h2>Sevanth A G</h2>

                <p className="profile-headline">
                    Full Stack Developer | MERN Stack
                    <br />
                    | AI Enthusiast | BCA Graduate | ...
                </p>

                <p className="profile-location">
                    India
                </p>

            </div>


            {/* Experience */}
            <button className="experience-button">
                <span>＋</span>
                Experience
            </button>

        </div>
    );
};

export default ProfileCard;