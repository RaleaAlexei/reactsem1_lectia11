import React, { useState } from "react";
import FormRow from "./FormRow";

const FormularProdus = (props) => {
    return (
        <form className="col-4 m-auto" onSubmit={props.onSubmit}>
            <FormRow id="nume" type="text" title="Nume:" onChange={props.handleInputChange} />
            <FormRow id="pret" type="number" title="Pret:" onChange={props.handleInputChange} />
            <FormRow id="cantitate" type="number" title="Cantitate:" onChange={props.handleInputChange} />
            <FormRow id="categorie" type="text" title="Categorie:" onChange={props.handleInputChange} />
            <button type="submit" className="btn btn-dark">Adauga</button>
        </form>
    )
}

export default FormularProdus;