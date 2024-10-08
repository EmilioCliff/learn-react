import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();

	const checkPath = (path) => {
		if (path === location.pathname) {
			return true;
		}
		return false;
	};

	return (
		<footer className='navbar'>
			<nav className='navbarNav'>
				<ul className='navbarListItems'>
					<li className='navbarListItem' onClick={() => navigate("/")}>
						<ExploreIcon
							fill={checkPath("/") ? "#2c2c2c" : "#8f8f8f"}
							width='36px'
							height='36px'
						/>
						<p
							className={
								checkPath("/")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Explore
						</p>
					</li>
					<li className='navbarListItem' onClick={() => navigate("/offers")}>
						<OfferIcon
							fill={checkPath("/offers") ? "#2c2c2c" : "#8f8f8f"}
							width='36px'
							height='36px'
						/>
						<p
							className={
								checkPath("/offers")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Offers
						</p>
					</li>
					<li className='navbarListItem' onClick={() => navigate("/profile")}>
						<PersonOutlineIcon
							fill={checkPath("/profile") ? "#2c2c2c" : "#8f8f8f"}
							width='36px'
							height='36px'
						/>
						<p
							className={
								checkPath("/profile")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Profile
						</p>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default NavBar;
