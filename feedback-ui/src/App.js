import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PostPage from './pages/PostPage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import Card from './components/shared/Card.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
						<Route path="/post/:id/:name" element={<PostPage />} />
						<Route path="/blogs/*" element={<BlogsPage />} />
					</Routes>
					<Card>
						<NavLink
							to="/"
							style={({ isActive, isPending, isTransitioning }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isPending ? 'red' : 'purple',
									backgroundColor: isActive ? 'white' : '',
									viewTransitionName: isTransitioning ? 'slide' : '',
								};
							}}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							style={({ isActive, isPending, isTransitioning }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isPending ? 'red' : 'purple',
									backgroundColor: isActive ? 'white' : '',
									viewTransitionName: isTransitioning ? 'slide' : '',
								};
							}}
						>
							About
						</NavLink>
						<NavLink
							to="/post/1/cliff"
							style={({ isActive, isPending, isTransitioning }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isPending ? 'red' : 'purple',
									backgroundColor: isActive ? 'white' : '',
									viewTransitionName: isTransitioning ? 'slide' : '',
								};
							}}
						>
							Post
						</NavLink>
						<NavLink
							to="/blogs/*"
							style={({ isActive, isPending, isTransitioning }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isPending ? 'red' : 'purple',
									backgroundColor: isActive ? 'white' : '',
									viewTransitionName: isTransitioning ? 'slide' : '',
								};
							}}
						>
							Blogs
						</NavLink>
					</Card>
					<Link
						to={{
							pathname: '/about',
							search: '?sort=name',
							hash: '#hello',
						}}
						className="about-link"
					>
						<FaQuestion color="white" />
					</Link>
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
