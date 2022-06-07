import { Route, Routes } from "react-router-dom";
import {Main} from './pages/Main'
import { Layout } from "./components/Layout";
import {MoviePage} from './pages/MoviePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/:id" element={<MoviePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
