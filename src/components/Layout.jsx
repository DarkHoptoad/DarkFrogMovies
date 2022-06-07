import { Outlet } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/header";

function Layout() {
  return (
    <>
        <div className='page'>
            <Header />
            <div className='hiden'></div>
            <Outlet />
            <Footer />
        </div>
    </>
  );
}

export { Layout };
