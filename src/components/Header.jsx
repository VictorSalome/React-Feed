import './Header.modules.css'

import igniteLogo from '../assets/Ignite simbol.svg'

export const Header = () => {

    return (
        <header className='header'>
            <img src={igniteLogo} alt="logo-ignite" />
        </header>

    )
}

