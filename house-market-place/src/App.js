import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Offers from "./pages/Offers";
import Category from "./pages/Category";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import Listing from "./pages/Listing";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/offers' element={<Offers />} />
					<Route path='/category/:categoryName' element={<Category />} />
					<Route path='/create-listing' element={<CreateListing />} />
					<Route path='/edit-listing/:listingId' element={<EditListing />} />
					<Route path='/profile' element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/sign-in' element={<SignIn />} />
					<Route
						path='/category/:categoryName/:listingId'
						element={<Listing />}
					/>
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/contact/:landlordId' element={<Contact />} />
				</Routes>
				<NavBar />
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
