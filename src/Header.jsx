import logo from './assets/africa.png'

function Header() {
    return (
        <header>
            <img src={logo} alt="Website logo - African Flag" />
            <h1>Memory Card <em>African Flags Edition</em></h1>
        </header>
    )
}

export default Header;