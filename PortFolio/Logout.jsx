import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        alert("logging out!!!")
        localStorage.removeItem('email');
        localStorage.removeItem('pass');

        navigate("/login")

    }
    return (
        <div>
            <Link to={"/login"}><button type="button" class="btn btn-danger" onClick={logout}> Logout</button></Link>
        </div>
    )
}

export default Logout


