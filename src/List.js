import Row from './Row';
import SortSymbol from './SortSymbol';

const List = (props) => {
    const {
        persons,
        handleEdit,
        handleRemove,
        handleSort,
        sortedBy
    } = props;

    const sortedColumn = sortedBy.column;
    const ascending = sortedBy.ascending;

    return (
        <div className='users'>
            <form id='userListForm'>
                <table>
                    <thead>
                    <tr>
                        <th onClick={(e) => handleSort('name')}>Name { sortedColumn === 'name' ? <SortSymbol ascending={ascending} /> : '' }</th>
                        <th onClick={(e) => handleSort('email')}>E-mail address { sortedColumn === 'email' ? <SortSymbol ascending={ascending} /> : ''}</th>
                        <th onClick={(e) => handleSort('phone')}>Phone number { sortedColumn === 'phone' ? <SortSymbol ascending={ascending} /> : ''}</th>
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
