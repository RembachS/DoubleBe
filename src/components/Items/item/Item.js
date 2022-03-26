import { useParams } from "react-router-dom";

import ItemLeftBlock from "./ItemLeftBlock";
import ItemRightBlock from "./ItemRightBlock";
import ItemCenterBlock from "./ItemCenterBlock";
import ItemInfo from "./ItemInfo";

import ItemsData from "../../../data/items.json";

import "./__item.scss";

function ItemBody() {
	const params = useParams();

	let thisItem = params.itemId;

	for (let i = 0; i < ItemsData.length; i++) {
		if (ItemsData[i].url === thisItem) {
			return (
				<div className="item">
					<div className="itemTop">
						<ItemLeftBlock />
						<ItemCenterBlock ItemTitle={ItemsData[i].title} RatesCount={ItemsData[i].ratesCount} DeliveryCount={ItemsData[i].count} QuantityLeft={ItemsData[i].quantity}/>
						<ItemRightBlock />
					</div>
                    <div className="itemInfo">
                        <ItemInfo></ItemInfo>
                    </div>
				</div>
			);
		}
	}
}
export default ItemBody;
