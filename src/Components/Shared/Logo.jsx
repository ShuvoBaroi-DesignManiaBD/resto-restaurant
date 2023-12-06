import { Link } from "react-router-dom";

const Logo = ({className}) => {
    return <Link to="/"><img src="https://i.ibb.co/1qzzgvX/logo.png" alt="logo" className={`${className}`}/></Link>
};

export default Logo;