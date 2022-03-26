import { useParams } from "react-router-dom";
import Item from "../components/Items/item/Item";

import ItemsData from "../data/items.json";

function ItemPage() {
	const params = useParams();

	let thisItem = params.itemId;

	for (let i = 0; i < ItemsData.length; i++) {
		if (ItemsData[i].url === thisItem) {
			return (
				<div>
					<Item />
					<p>{params.itemId}</p>
				</div>
			);
		}
	}
}
export default ItemPage;
