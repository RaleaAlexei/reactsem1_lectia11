import React from "react";

const FormRow = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="fw-bold">{props.title}</label>
            <input type={props.type} name={props.id} onChange={props.onChange} value={props.value} className="form-control" id={props.id} required />
        </div>
    );
}

export default FormRow;