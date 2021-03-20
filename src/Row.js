import {useState} from "react";
import {formIsValid} from "./utils";

const Row = (props) => {
    const {
        index,
        person,
        handleEdit,
        handleRemove
    } = props;

    const [editing, setEditing] = useState(false);

    const [name, setName] = useState(person.name);
    const [email, setEmail] = useState(person.email);
    const [phone, setPhone] = useState(person.phone);

    const editRow = () => {
        setEditing(true);
    }

    const removeRow = (i) => {
        handleRemove(i);
    }

    const handleSave = (e) => {
        e.preventDefault(); // do not submit, it causes page refresh
        const valid = formIsValid(document.getElementById('userListForm'));
        if (valid) {
            handleEdit(person.id, { name, email, phone });
            setEditing(false);
        }
    }

    if (editing) {
        return (
            <tr>
                <td><input type='text' value={name} onChange={e => setName(e.target.value)} required placeholder='Full name' /></td>
                <td><input type='email' value={email} onChange={e => setEmail(e.target.value)} required placeholder='E-mail address' /></td>
                <td><input type='tel' pattern='[0-9]{10}' value={phone} onChange={e => setPhone(e.target.value)} required placeholder='Phone number (10 digits)' /></td>
                <td>
                    <button type='reset' onClick={() => setEditing(false)}>Cancel</button>
                    <button type='submit' onClick={(e) => handleSave(e)}>Save</button>
                </td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>
                    <i className='fas fa-pen fa-lg' onClick={() => editRow()}></i>
                    <i className='fas fa-trash fa-lg' onClick={() => removeRow(person.id)}></i>
                </td>
            </tr>
        );
    }
}

export default Row;
