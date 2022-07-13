import logo from '../../assets/img/logo.svg'

import'./style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>WkVendas</h1>
                <p>Desenvolvido por Eduardo Buchhorn</p>
            </div>
        </header>
    )
}

export default Header