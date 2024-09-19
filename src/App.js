import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Login from "./components/Login";
import NewsPostForm from "./components/NewsPostForm";
import NewsTable from "./components/NewsTable";
import Live from "./components/Live";

const App = () => {
	const pageSize = 9;
	const apiKey = "e885f398aff44df8a28ad7a3b3f49474";
	const [progress, setProgress] = useState(0);

	return (
		<div>
			<Router>
				<Navbar />
				<div>
					<LoadingBar color="#f11946" progress={progress} height={3} />
				</div>
				<Routes>
					<Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
					<Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
					<Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
					<Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
					<Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
					<Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
					<Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
					<Route path="/login" element={<Login/>}/>
					<Route path="/postnews" element={<NewsPostForm/>}/>
					<Route path="/mynews" element={<NewsTable/>}/>
					<Route path="/live" element={<Live/>}/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
