
import React from "react";
import "./Navbar.css";
import galvinusLogo from "../../assets/galvinus_logo.jpeg"

const Navbar = () => {
	return (
		<header>
			<nav>
				{/* Logo Section */}
				<div className="logo-container">
					<img src={galvinusLogo} alt="galvinus-logo" />
					<span className="logo-text">Galvinus</span>
				</div>

				{/* Search Bar */}
				<div className="search-box">
					<input type="text" className="input-search" placeholder="Type to Search..." />
					<button className="btn-search"><i className="fas fa-search"></i></button>
				</div>

				{/* Navigation Icons */}
				<div className="nav-icons">
					<a href="/" title="Teams"><i className="fas fa-users icon-team"></i></a>
					<a href="/" title="Notifications"><i class="fa-solid fa-bell"></i></a>
					<a href="/" title="Settings"><i className="fas fa-gear icon-setting"></i></a>
					<a href="/" title="Your Profile"><i className="fas fa-user-circle icon-profile"></i></a>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;