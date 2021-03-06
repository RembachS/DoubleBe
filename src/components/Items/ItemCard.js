import "./__ItemCard.scss";
import { Link } from "react-router-dom";

// IMG
import itemManImg from "../../assets/img/item/item-man.png";

import safeImg from "../../assets/img/icons/cards/safe.svg";
import starImg from "../../assets/img/icons/cards/star.svg";

import top1Img from "../../assets/img/icons/cards/top1.svg";
import newSellerImg from "../../assets/img/icons/cards/newSeller.svg";
import basketImg from "../../assets/img/icons/cards/basket.svg";

function ItemCard(props) {
	const ItemTitle = props.itemTitle;
	const ItemLink = props.itemLink;
	const TagTitle = props.tagTitle;
	const ItemCardFullPrice = props.itemCardFullPrice;
	const ItemCardPrice = props.itemCardPrice;
	const Count = props.count;
	const ItemRate = props.itemRate;
	const Safe = props.safe;
	const Delivery = props.delivery;
	const AvatarsCount = props.avatarsCount;

	let tagImgOrJustText;

	if (!TagTitle) {
		tagImgOrJustText = <div style={{ height: "44.4px" }}></div>;
	} else {
		if (!props.tagIcon) {
			tagImgOrJustText = <div className={props.tagClass}>{TagTitle}</div>;
		} else {
			tagImgOrJustText = (
				<div className={props.tagClass}>
					<img className="item-card__tagImg" src={props.tagIcon} alt={TagTitle} />
					{TagTitle}
					<div style={{ display: "none" }}>
						<img src={top1Img} alt=""></img>
						<img src={newSellerImg} alt=""></img>
						<img src={basketImg} alt=""></img>
					</div>
				</div>
			);
		}
	}

	let avtCount;

	if (AvatarsCount >= 1) {
		avtCount = (
			<div className="item-card__count">+{AvatarsCount - 7}</div>
		);
	}

	let rate;

	if (ItemRate) {
		rate = (
			<div className="item-card__ratesItem">
				<img src={starImg}></img>
				{ItemRate}
			</div>
		);
	}

	let safety;

	if (Safe) {
		safety = (
			<div className="item-card__ratesItem">
				<img src={safeImg}></img>
			</div>
		);
	}

	let count;

	if (Count) {
		count = <div className="item-card__ratesItem">{Count} sprzedano</div>;
	}

	let delivery;

	if (Delivery) {
		delivery = <div className="item-card__delivery">{Delivery}</div>;
	}

	return (
		<Link className="item-card" to={ItemLink}>
			<img className="item-card__img" src={props.cardImg} alt={ItemTitle} />
			<div className="item-card__info">
				<div className="item-card__title truncate">{ItemTitle}</div>
				<div className="item-card__avatars">
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					<img className="item-card__avatarsItem" src={itemManImg} alt="img" />
					{avtCount}
				</div>
				{tagImgOrJustText}
				<div className="item-card__fullPrice">{ItemCardFullPrice} z??</div>
				<div className="item-card__price">{ItemCardPrice} z??</div>
				<div className="item-card__rates">
					{count}
					{rate}
					{safety}
				</div>
				{delivery}
			</div>
		</Link>
	);
}

export default ItemCard;