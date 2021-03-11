import { useState } from "react";
import { formIsValid } from "./utils";

const AddParticipant = (props) => {
    const {
        handleClick
    } = props;

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const addNew = (e) => {
        e.preventDefault(); // do not submit, it causes page refresh
        const valid = formIsValid(document.getElementById('participantForm'));
        if (valid) {
            handleClick({ name, email, phone });
            e.target.reset(); // clear form
        }
    };

    return (
        <form id='participantForm' onSubmit={(e) => addNew(e)}>
            <table className='newUser'>
                <tbody>
                    <tr>
                        <td><input type='text' placeholder='Full name' onChange={e => setName(e.target.value)} required /></td>
                        <td><input type='email' placeholder='E-mail address' onChange={e => setEmail(e.target.value)} required /></td>
                        <td><input type='tel' pattern='[0-9]{10}' placeholder='Phone number (10 digits)' onChange={e => setPhone(e.target.value)} required /></td>
                        <td><button type='submit'>Add new</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default AddParticipant;
