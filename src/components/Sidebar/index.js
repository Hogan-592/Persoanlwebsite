import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoH from '../../assets/images/logo-h.png';
import LogoSubtitle from '../../assets/images/logo_sub_hogan.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';

//create a dummy function 
//Link: to attribute sets to '/' to return to homepage
const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoH} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"> 
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> 
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/hoganluo'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Hogan-592'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar