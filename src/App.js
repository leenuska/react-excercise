import { useState } from 'react';
import shortid from 'shortid';
// own components
import participantsData from './seedData';
import Header from './Header';
import AddParticipant from './Participant';
import List from './List';
// css imports
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {

    const [sortedBy, setSortedBy] = useState({ column : 'name', ascending: true });
    const [persons, setPersons] = useState(participantsData);

    const addPerson = (personObject) => {
        // console.log('add person' , personObject);
        const tempList = [...persons];
        tempList.push({id: shortid.generate(), ...personObject});
        // console.log('tempList, person added', tempList)
        setPersons(tempList);
    };

    const removePerson = (index) => {
        // console.log('remove person from index', index);
        const tempList = [...persons];
        tempList.splice(index,1);
        setPersons(tempList);
    };

    const editPerson = (id, newData) => {
        // console.log('edit person with ', id);
        // console.log('edit person with data ', newData);
        const tempList = [...persons];
        const newList =  tempList.map((person) => {
            if (person.id === id) {
                return { ...person, ...newData }
            } else return person;
        })
        setPersons(newList);
    };

    const sortBy = (columnName) => {
        const currentSort = sortedBy;
        let newAscending; // New ascending value. Don't use state since it might not have been updated yet!
        if (columnName === currentSort.column) {
            newAscending = !currentSort.ascending;
            setSortedBy({ column: currentSort.column, ascending: newAscending })
        } else {
            newAscending = true;
            setSortedBy({ column: columnName, ascending: newAscending })
        }

        const tempList = [...persons];
        tempList.sort(function(a,b){
            const value1 = a[columnName].toUpperCase();
            const value2 = b[columnName].toUpperCase();
            if (value1 < value2) {
                return newAscending? -1 : 1;
            }
            if (value1 > value2) {
                return newAscending? 1 : -1;
            }
            return 0;
            }
        );
        setPersons(tempList);
    };

  return (
      <article>
        <Header name='Heading Text'/>
        <div className='container'>
            <h1>List of participants</h1>
            <AddParticipant handleClick={addPerson}/>
            <List persons={persons} handleEdit={editPerson} handleRemove={removePerson} handleSort={sortBy} sortedBy={sortedBy}/>
        </div>
      </article>
  );
}

export default App;
