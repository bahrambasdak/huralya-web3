import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.JPG';


const Header = () => {
    return ( 
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="header-menu">
            <ul className="menu">
                <li > <NavLink  to='/GENESIS' className="item item1" activeClassName='active' >GENESIS</NavLink></li>
                <li ><NavLink to='/Aboutus' className="item item2" activeClassName='active'>About us</NavLink></li>
                <li ><NavLink to='/insignia' className="item item3" activeClassName='active'>insignia NFT</NavLink></li>
                <li > <NavLink to='/lyatoken' className="item item4" activeClassName='active'>LYA TOKEN</NavLink></li>
            </ul>
        </div>
        <div className="header-login">
            <button className="login-btn btn">login</button>
        </div>
    </div> 
    );
}
 
export default Header;