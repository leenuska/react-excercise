import namor from 'namor';
import shortid from 'shortid';

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

export default participantsData;
