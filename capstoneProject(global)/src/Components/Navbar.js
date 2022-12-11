import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CONFIG from "../Global/Config";
import Cookie from "../Global/SetCookie";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();
	const [user,setUser] = useState(null)

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	let handleLogout = () => {
		Cookie.remove(CONFIG.TOKEN_KEY)
		window.location.reload(true)
	}

	useEffect(() => {

		if(Cookie.get(CONFIG.TOKEN_KEY) && (user == null))
		{
			axios({
				url: CONFIG.API_URL('/user'),
				method: "GET",
				headers: {
					'Content-Type' : 'application/json',
					'Accept': "application/json",
					'Authorization': `Bearer ${Cookie.get(CONFIG.TOKEN_KEY)}`,
				}
			})
			.then((response) => {
				let res = response.data
				if(res.status){
					setUser(res.data)
					console.log(user)
				}
			})
		}

	})

	return (
		<header>
			<h3>MindHealth</h3>
			<nav ref={navRef}>
				<Link to="/#">Home</Link>
				<Link to="/services">Layanan</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/about-us">About Us</Link>
				{user? 
				<>
					<Link to="/admin" className="bg-default text-white rounded-3 px-3">{user.name}</Link> 
					<a href="javascript:;" onClick={handleLogout} className="text-danger bg-white">Logout</a> 
				</>
				: 
				<Link to="/login">Login</Link>}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
