import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [auth,setauth]=useState(false);
	useEffect(() => {
		// Function to get the value from sessionStorage
		const getValueFromSession = () => {
		  const auth = sessionStorage.getItem("auth");
		  setauth(auth);
		};
	
		// Set interval to call getValueFromSession every second (1000ms)
		const intervalId = setInterval(getValueFromSession, 1000);
	
		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	  }, [auth]);
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black example" data-bs-theme="dark">
				<div className="container-fluid">
					<Link className="navbar-brand" style={{ fontSize: "25px" }} to="/">
						FM News
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse nav-center " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item ">
								<Link className="nav-link" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/business">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/entertainment">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/health">
									Health
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/science">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link " to="/technology">
									Technology
								</Link>
							</li>
							{auth ?(
								<li onClick={()=>sessionStorage.clear()} className="nav-item" style={{width:'47vw',textAlign:'end'}}>
								<button>
							<Link className="nav-link " to="/">
									Logout
							</Link>
									</button>
						</li>
							): 
							<li className="nav-item" style={{width:'47vw',textAlign:'end'}}>
									<button>
								<Link className="nav-link " to="/login">
										Employee Login
								</Link>
										</button>
							</li>
							}
						</ul>
					</div>
					
					
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
