import React from "react";



function Spinner(){
    return (
        <div className="d-flex justify-content-center align-items-center spinner-cust-height spinner">
        <div className="spinner-border text-light spinner-cust-size" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    );

}


export default Spinner;