import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import { PageLinks } from './PageLinks';
import SocialLinks from './SocialLinks';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
       <PageLinks  parentClass='nav-links' itemClass='nav-link'/>

        <ul className="nav-icons">
          {socialLinks.map((social)=>{
            return <SocialLinks key={social.id} {...social} itemClass='nav-link' />
          })}
          
        </ul>
      </div>
    </nav>
  )
}
export default Navbar