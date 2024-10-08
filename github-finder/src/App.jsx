import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import { GithubContextProvider } from "./context/github/GithubContext";
import { AlertContextProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex flex-col justify-between min-h-screen bg-gray-600">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  );
}

export default App;
//   const token = import.meta.env.VITE_GITHUB_TOKEN;
