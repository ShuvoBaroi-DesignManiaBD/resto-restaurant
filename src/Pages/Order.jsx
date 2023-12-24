import { useLocation } from "react-router-dom";

const Order = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
            this is order page
        </div>
    );
};

export default Order;