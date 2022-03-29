import ItemCard from "./ItemCard";

import "./__ItemsList.scss";

import ItemsData from "../../data/items.json";

function ItemsList() {

	let ItemsListContent = ItemsData.map(function (item) {
		return <ItemCard key={item.id} count={item.count} delivery={item.delivery} itemTitle={item.title} srcCardImg={item.img} tagClass={item.tagClass} tagTitle={item.tagTitle} src={item.tagSrc} alt={item.tagTitle} itemCardFullPrice={item.fullPrice} itemCardPrice={item.price} itemLink={item.url} itemRate={item.rate} safe={item.isSafe} avatarsCount={item.avatarsCount}></ItemCard>;
	});

	return (
		<div className="items-list">
			<div className="items-list__wrapper">{ItemsListContent}</div>
		</div>
	);
}

export default ItemsList;