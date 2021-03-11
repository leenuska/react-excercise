import logo from './logo.svg';

const Header = (props) => {
    const {
        name
    } = props;
    return (
        <header>
            <div className='logo'><img src={logo} alt="React is fun" /></div>
            <div className='name'>{name}</div>
        </header>
    );
}

export default Header;
