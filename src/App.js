import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  return (
  // <BrowserRouter>
  //     <Routes>
  //       <Route element={<Layout />}>
  //         <Route></Route>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  <Layout />
  );
}

export default App;