import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";

import "./App.scss";

import Home from "./routes/home/Home";
import NotFound from "./routes/404/NotFound";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
					{/* <Route path="/:type" element={<TypePage />} /> */}
				</Route>
				{/* <Route path="/:type" element={<TypePage />} /> */}
			</Routes>
		</Router>
	);
};

const Layout = () => {
	return (
		<div className="layout">
			{/* Header */}
			<Outlet />
			{/* Footer */}
		</div>
	);
};

export default App;
