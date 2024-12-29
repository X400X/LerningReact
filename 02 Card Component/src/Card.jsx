import profilePic from './assets/Smiley_Face.jpg'

function Card () {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} height="200" width="200" alt="Profile picture"></img>
            <h2 className="card-title">Kostiantyn</h2>
            <p className="card-text">Learning react and like to play video games</p>

        </div>   
    );

}
export default Card;