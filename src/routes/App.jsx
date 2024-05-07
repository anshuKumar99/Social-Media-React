import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import PostListContextProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PostListContextProvider>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListContextProvider>
    </>
  );
}

export default App;
