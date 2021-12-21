import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar()
{
    return <header className={classes.header}>
        <h1 className={classes.logo}><Link to='/'>ACM Cyber</Link></h1>
        <nav>
            <ul>
                <li><Link to='/challenges'>Challenges</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;