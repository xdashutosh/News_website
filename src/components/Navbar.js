import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTv, FaUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
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
				<div className="container-fluid" >
					<Link className="navbar-brand" style={{ fontSize: "25px" }} to="/">
						P News
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse nav-center " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
							<li className="nav-item ">
								<Link className="nav-link" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item ">
								<Link className="nav-link" aria-current="page" to="/latest">
									
									<HStack >
								<FaChartLine size={32} color="white"/>	
								<span >latest</span>
								</HStack>
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
								<Link className="nav-link" to="/sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link " to="/technology">
									Technology
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link " to="/live">
								<HStack >
								<FaTv size={32} color="white"/>	
								<span >Live TV</span>
								</HStack>
								</Link>
							</li>
							{auth ?(
								<HStack>

								<li  className="nav-item" >
								<Button variant={'solid'} colorScheme="blue">
							<Link className="nav-link " to="/mynews">
							<HStack>
								<FaUser/>
								<span>DashBoard</span>
							</HStack>
								
							</Link>
									</Button>
						</li>

						<li onClick={()=>sessionStorage.clear()} className="nav-item" >
								<Button variant={'solid'} colorScheme="blue">
							<Link className="nav-link " to="/">
									Logout
							</Link>
									</Button>
						</li>
								</HStack>
							): 
							<li className="nav-item">
									<Button variant={'solid'} colorScheme="blue">
								<Link className="nav-link " to="/login">
										Employee Login
								</Link>
										</Button>
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
