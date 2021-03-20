const SortSymbol = (props) => {
    const {
        ascending
    } = props;
    return ascending ? <i className='fas fa-arrow-down'></i> : <i className='fas fa-arrow-up'></i>;
}

export default SortSymbol;
