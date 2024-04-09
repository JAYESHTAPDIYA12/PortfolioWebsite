import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (<>

        <nav className="navbar sticky-bottom bg-body-tertiary  ">
            <div class="container-fluid justify-content-center text-capitalize" style={{ position: "absolute", bottom: "0px", marginBottom: "-12vw" }}>
                <h3 style={{ textAlign: "center" }}> CopyRight ©  {year} </h3>
            </div>
        </nav>

    </>
    )
}

export default Footer



