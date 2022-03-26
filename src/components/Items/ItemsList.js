import ItemCard from "./ItemCard";

import "./__ItemsList.scss";

// IMG
// import itemManImg from "../../assets/img/item/item-man.png";
import top1Img from "../../assets/img/icons/cards/top1.svg";
import newSellerImg from "../../assets/img/icons/cards/newSeller.svg";
import basketImg from "../../assets/img/icons/cards/basket.svg";

import ItemsData from "../../data/items.json";

function ItemsList() {
	// const itemData = [
	// 	{
	// 		id: 1,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 122,
	// 		tagTitle: "Top Seller",
	// 		tagSrc: top1Img,
	// 		tagClass: "item-card__tag green",
	// 		fullPrice: 11.5,
	// 		price: 8.5,
	// 		url: "items/item1",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: true,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	//         tagTitle: "New seller",
	// 		tagSrc: newSellerImg,
	// 		tagClass: "item-card__tag blue",
	// 		fullPrice: 14.5,
	// 		price: 10.5,
	// 		url: "items/item2",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: "Top Seller",
	// 		tagSrc: top1Img,
	// 		tagClass: "item-card__tag green",
	// 		fullPrice: 8.5,
	// 		price: 6,
	// 		url: "items/item3",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: "Pozostało 20 szt",
	// 		tagSrc: basketImg,
	// 		tagClass: "item-card__tag gold",
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item4",
	// 		count: 23,
	// 		rate: false,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: "Wyprzedano",
	// 		tagSrc: "",
	// 		tagClass: "item-card__tag gold bordeGold",
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item5",
	// 		count: false,
	// 		rate: false,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: "Top Seller",
	// 		tagSrc: top1Img,
	// 		tagClass: "item-card__tag green",
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item6",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	//     {
	// 		id: 7,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: "Top Seller",
	// 		tagSrc: top1Img,
	// 		tagClass: "item-card__tag green",
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item7",
	// 		count: 273,
	// 		rate: null,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	//     {
	// 		id: 8,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 15,
	// 		tagTitle: null,
	// 		tagSrc: null,
	// 		tagClass: null,
	//         fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item8",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	//     {
	// 		id: 9,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 8,
	//         tagTitle: null,
	// 		tagSrc: null,
	// 		tagClass: null,
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item9",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: null,
	// 	},
	//     {
	// 		id: 10,
	// 		title: "Koszulka męska kolor biały, niebieski, czarny, 100%...",
	// 		img: itemManImg,
	//         avatarsCount: 0,
	//         tagTitle: "Top Seller",
	// 		tagSrc: top1Img,
	// 		tagClass: "item-card__tag green",
	// 		fullPrice: 18.5,
	// 		price: 16,
	// 		url: "items/item10",
	// 		count: 273,
	// 		rate: 4.7,
	// 		isSafe: false,
	// 		delivery: "Darmowa dostawa",
	// 	},
	// ];

	// const tagData = [
	// 	{
	// 		title: "Top Seller",
	// 		src: top1Img,
	// 		class: "item-card__tag green",
	// 	},
	// 	{
	// 		title: "New seller",
	// 		src: newSellerImg,
	// 		class: "item-card__tag blue",
	// 	},
	// 	{
	// 		title: "Pozostało 20 szt",
	// 		src: basketImg,
	// 		class: "item-card__tag gold",
	// 	},
	// 	{
	// 		title: "Wyprzedano",
	// 		src: "",
	// 		class: "item-card__tag gold bordeGold",
	// 	},
	// ];

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