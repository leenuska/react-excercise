import Row from './Row';

const List = (props) => {
    const {
        persons,
        handleEdit,
        handleRemove,
        handleSort,
        sortedBy
    } = props;

    const sortedColumn = sortedBy.column;

    const sortSymbol = () => {
        if (sortedBy.ascending) {
            return <i className='fas fa-arrow-down'></i>;
        } else {
            return <i className='fas fa-arrow-up'></i>;
        }
    }

    return (
        <div className='users'>
            <form id='userListForm'>
                <table>
                    <thead>
                    <tr>
                        <th onClick={(e) => handleSort('name')}>Name { sortedColumn === 'name' ? sortSymbol() : ''}</th>
                        <th onClick={(e) => handleSort('email')}>E-mail address { sortedColumn === 'email' ? sortSymbol() : ''}</th>
                        <th onClick={(e) => handleSort('phone')}>Phone number { sortedColumn === 'phone' ? sortSymbol() : ''}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((person, i) =>
                                <Row person={person} index={i} key={person.id} handleEdit={handleEdit} handleRemove={handleRemove} />
                            )
                        }
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default List;
