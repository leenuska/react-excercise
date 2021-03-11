import { useState } from 'react';
import namor from 'namor';
import shortid from 'shortid';
// own components
import Header from './Header';
import AddParticipant from './Participant';
import List from './List';
// css imports
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {

    const [sortedBy, setSortedBy] = useState({ column : 'name', ascending: true });

    // generate data
    const newPerson = (n) => {
        const name = namor.generate({ words: 1, saltLength: 4 });
        const phone = '0'+ Math.floor(Math.random() * 1000000000);
        return { id: n, name, email: name + '@email.com', phone };
    }

    let participantsData = [];
    for (let i = 0; i < 20; i++) {
        participantsData.push(newPerson(shortid.generate()));
    }

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

    const editPerson = (index, newData) => {
        // console.log('edit person on index ', index);
        // console.log('edit person with data ', newData);
        const tempList = [...persons];
        tempList.splice(index,1, newData);
        setPersons(tempList);
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
        <Header name='Nord Software'/>
        <div className='container'>
            <h1>List of participants</h1>
            <AddParticipant handleClick={addPerson}/>
            <List persons={persons} handleEdit={editPerson} handleRemove={removePerson} handleSort={sortBy} sortedBy={sortedBy}/>
        </div>
      </article>
  );
}

export default App;
