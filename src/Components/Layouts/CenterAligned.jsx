
const CenterAligned = ({children}, {className}) => {
    return (
        <div className={`container mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default CenterAligned;