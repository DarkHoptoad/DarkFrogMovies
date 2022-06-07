function Footer () {

return <footer className="page-footer footer grey darken-3">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!"><span className='link__txt'>Repo</span></a>
            </div>
          </div>
        </footer>
}

export {Footer}