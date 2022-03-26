import { Route } from "react-router-dom";
import ItemsList from "../components/Items/ItemsList";
import Sidebar from "../components/Sidebar/Sidebar";

function MainPage() {
	return (
		<div className="app">
			<Sidebar />
			<ItemsList />
			<Route path="/main/new-user">
                <h1>This is a new user page</h1>
            </Route>
		</div>
	);
}
export default MainPage;