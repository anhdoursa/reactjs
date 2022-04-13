import { Link } from "react-router-dom";

function Logo() {
    return (
        <div id="logo">
            <Link to="/">
                <img src="https://media.istockphoto.com/vectors/adoption-and-community-care-vector-id1286680331?k=20&m=1286680331&s=612x612&w=0&h=N7cQExSqTTo-Jd30iyOe0IrCCpbeyCRBuxUHL1j13qs=" alt="logo" />
            </Link>
        </div>
    );
}

export default Logo;