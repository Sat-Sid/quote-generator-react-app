import React from "react";

let today = new Date();
let year = today.getFullYear();


function Footer(){

    return (
        <div className="footer">
            <p>Copyright &copy; 2023 - {year} Sat-Sid</p>
        </div>
    )
}

export default Footer;