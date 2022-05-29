import {Header} from './layout/header'
import {Footer} from './layout/footer'
import {Main} from './layout/main'

function App() {
  return (
    <>
      <div className='page'>
      <Header />

      <div className='hiden'></div>

      <Main />

      <Footer />
      </div>

    </>
  );
}

export default App;
