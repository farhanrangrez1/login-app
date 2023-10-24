import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
   <div className="container">
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>    
    </Routes>
   </div>
   <ToastContainer/>
 
    </Router>
  );
}

export default App;
