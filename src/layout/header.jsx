import {Link} from 'react-router-dom'
function Header () {
    return  <nav className="header">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Dark Frog Movies</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <span href="#" className="link__txt">Repo</span>
          </ul>
        </div>
      </nav>
    
}

export {Header}