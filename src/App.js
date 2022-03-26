import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TailSpin } from  'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./__App.scss";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const ItemsList = React.lazy(() => import("./components/Items/ItemsList"));
const ItemPage = React.lazy(() => import("./pages/ItemPage"));

function App() {
	return (
		<Suspense fallback={
            <div className="centered">
                <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
            </div>}>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/main" />
				</Route>
				<Route path="/main">
					<div className="container">
						<MainPage />
					</div>
				</Route>
				<Route path="/items" exact>
					<div className="container">
						<ItemsList />
					</div>
				</Route>
				<Route path="/:itemId">
					<ItemPage />
				</Route>
			</Switch>
		</Suspense>
	);
}
export default App;
