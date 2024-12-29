function ProfilePicture(){

    const imageUrl = './src/assets/Smiley_Face.jpg';

    const handleClick = (e) => {
        console.log("Ouch");
        e.target.style.display = "none";
    }

    return (
        <>
        <img onClick={(e) =>handleClick(e)}src={imageUrl}></img>
        </>
    );
}
export default ProfilePicture;