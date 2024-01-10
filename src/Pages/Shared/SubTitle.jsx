
const SubTitle = ({subtitle}) => {
    return (
        <span className='textLg flex gap-3 justify-center text-primary text-center'>
                    <img
                        className="left-vec"
                        src="/public/images/sub-title-vec.svg"
                        alt="sub-title-vec"
                    />
                    {subtitle ? subtitle : "Welcome To Restho"}
                    <img
                        className="right-vec"
                        src="/public/images/sub-title-vec.svg"
                        alt="sub-title-vec"
                    />
                </span>
    );
};

export default SubTitle;