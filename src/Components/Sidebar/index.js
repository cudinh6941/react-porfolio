import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/messi.png'
import LogoSubtitle from '../../assets/images/messi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
