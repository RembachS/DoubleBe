import "./__ItemCard.scss";
import { Link } from "react-router-dom";

import safeImg from "../../assets/img/icons/cards/safe.svg";
import starImg from "../../assets/img/icons/cards/star.svg";

// IMG
import itemManImg from "../../assets/img/item/item-man.png";

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
		if (!props.src) {
			tagImgOrJustText = <div className={props.tagClass}>{TagTitle}</div>;
		} else {
			tagImgOrJustText = (
				<div className={props.tagClass}>
					<img className="item-card__tagImg" src={props.src} alt={TagTitle} />
					{TagTitle}
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
	} else {
		count = <div style={{ height: "8.8px" }}></div>;
	}

	let delivery;

	if (Delivery) {
		delivery = <div className="item-card__delivery">{Delivery}</div>;
	}

	return (
		<Link className="item-card" to={ItemLink}>
			<img className="item-card__img" src={props.srcCardImg} alt={ItemTitle} />
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
				<div className="item-card__fullPrice">{ItemCardFullPrice} zł</div>
				<div className="item-card__price">{ItemCardPrice} zł</div>
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