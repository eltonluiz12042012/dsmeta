
import logo from '../../assets/img/logo.svg';
import './style.css';


function Header() {
    return (
        <header id="sales">
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo do site"/>
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/elton-luiz-santos-do-franco-dpo/" target="_blank">&nbsp;Elton Luiz</a>
                </p>
            </div>
        </header>
    )
}

export default Header
