import './header.scss'
import { Link } from 'react-router-dom';
// import Home from '../App.js';
// import History from '../History/History';
// import Help from'../Help/help';


const Header = ()=>{
    return(
      <header>
        <h1>
          RESTy
        </h1>
        <nav>
          <ul>

            <li> <Link to='/'>HOME</Link> </li>
            <li> <Link to='/HISTORY'>HISTORY</Link> </li>
            <li> <Link to='/HELP'>HELP</Link> </li>

          </ul>
        </nav>
      </header>
    )
  }

export default Header;