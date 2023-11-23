import React, { useState } from "react";
import FormularProdus from "./FormularProdus";
const TableRow = (props) => {
    return (
        <tr key={props.produs.id}>
            <td>{props.produs.nume}</td>
            <td>{props.produs.pret}</td>
            <td>{props.produs.cantitate}</td>
            <td>{props.produs.categorie}</td>
            <td>
                <button className="btn btn-danger btn-sm m-1" onClick={(e) => props.onDelete(props.produs, e)} >Sterge</button>
                <button className="btn btn-warning btn-sm m-1" onClick={(e) => props.onEdit(props.produs, e)} >Editeaza</button>
            </td>
        </tr>
    )
}
const Produse = () => {
    const [nume, setNume] = useState("");
    const [pret, setPret] = useState(0);
    const [cantitate, setCantitate] = useState(0);
    const [categorie, setCategorie] = useState("");
    const [produse, setProduse] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const defaultTitle = "Adauga produs";
    const [title, setTitle] = useState(defaultTitle)
    const handleSubmit = (e) => {
        e.preventDefault();
        const produsData = { id: produse.length, nume, pret, cantitate, categorie };
        setProduse(() => {
            if (editIndex === -1)
                return [...produse, produsData]
            else {
                produsData.id = editIndex;
                const produsInArray = produse.findIndex((p1) => produsData.id === p1.id);
                if (produsInArray !== -1) {
                    const newProduse = [...produse];
                    newProduse[produsInArray] = produsData;
                    return newProduse;
                }
                return [...produse];
            }
        });
        setEditIndex(-1);
        e.target.reset();
        setTitle(defaultTitle);
    };
    const handleDelete = (produs) => {
        if(window.confirm("Confirmati stergerea?"))
            setProduse(produse.filter((p1) => p1.id !== produs.id));
    }
    const handleEdit = (produs) => {
        setEditIndex(produs.id);
        setTitle(`Editeaza ${produs.nume}`);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "nume":
                setNume(name === "nume" ? value : "");
                break;
            case "pret":
                setPret(name === "pret" ? parseInt(value) : 0);
                break;
            case "cantitate":
                setCantitate(name === "cantitate" ? parseInt(value) : 0);
                break;
            case "categorie":
                setCategorie(name === "categorie" ? value : "");
                break;
            default:
                break;
        }
    }
    return (
        <div className="container mt-5">
            <h3 className="text-center">{title}</h3>
            <FormularProdus handleInputChange={handleChange} onSubmit={handleSubmit} />
            <h4>Informatii produse</h4>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Pret</th>
                        <th>Cantitate</th>
                        <th>Categorie</th>
                        <th>Optiuni</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produse.map((value, index) => <TableRow onEdit={handleEdit} onDelete={handleDelete} produs={value} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Produse;