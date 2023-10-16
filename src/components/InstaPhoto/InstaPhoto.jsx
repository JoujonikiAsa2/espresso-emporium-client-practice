const InstaPhoto = ({favorite}) => {
    const {photo} = favorite
    return (
        <div>
            <img src={photo} alt="" />
        </div>
    );
};

export default InstaPhoto;