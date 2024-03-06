import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";

import { DataProvider } from "./context/DataContext";
import { Route, Routes } from "react-router-dom";


function App() { 


  return (
    <div className="App">
     <DataProvider> 
    <Header title = {"React JS Blog"} />
    <Nav /> 

    <Routes>  
    <Route path="/" element = {<Home/>} />
    <Route path="/post" element = {<NewPost/>} />

   <Route path="/edit/:id" element = {<EditPost/>} />
    <Route path="/post/:id" element = {<PostPage/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/*" element = {<Missing/>} />
   
    </Routes>
  
    <Footer/>
    </DataProvider>
    </div>
  );
}

export default App;
