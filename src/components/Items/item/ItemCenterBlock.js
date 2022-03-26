import { useState } from "react";

import { Carousel } from "react-carousel-minimal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

import "./__itemCenterBlock.scss";

// IMG
import itemManImg from "../../../assets/img/item/item-man.png";

function ItemCenterBlock(props) {
	const data = [
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
		{
			image: itemManImg,
		},
	];

	var itemColor = document.getElementsByClassName("itemTop__centerPropertyColor");

	for (let i = 0; i < itemColor.length; i++) {
		itemColor[i].onclick = function () {
			for (let i = 0; i < itemColor.length; i++) {
				itemColor[i].classList.remove("db-active");
			}
			this.classList.toggle("db-active");
		};
	}

	var colorSize = document.getElementsByClassName("itemTop__centerPropertySize");

	for (let i = 0; i < colorSize.length; i++) {
		colorSize[i].onclick = function () {
			for (let i = 0; i < colorSize.length; i++) {
				colorSize[i].classList.remove("db-active");
			}
			this.classList.toggle("db-active");
		};
	}

	const [counter, setCounter] = useState(1);
	let incrementCount = () => setCounter(counter + 1);
	let decrementCounter = () => setCounter(counter - 1);

	if (counter <= 1) {
		decrementCounter = () => setCounter(1);
	}

	const ItemTitle = props.ItemTitle;
	const RatesCount = props.RatesCount;
	const DeliveryCount = props.DeliveryCount;
	const QuantityLeft = props.QuantityLeft;

	let isRatesCount;

	if (RatesCount) {
		isRatesCount = <div className="itemTop__centerRateCount">{RatesCount ? "(" + RatesCount + ")" : ""}</div>;
	}

	let isDeliverd;

	if (DeliveryCount) {
		isDeliverd = <div className="itemTop__centerRateOrders">{DeliveryCount} zamówienia</div>;
	}

	return (
		<div className="itemTop__center">
			<div className="itemTop__centerGallery">
				<Carousel
					data={data}
					time={2000}
					width="380px"
					height="380px"
					slideNumber={false}
					automatic={false}
					dots={false}
					slideBackgroundColor="darkgrey"
					slideImageFit="cover"
					thumbnails={true}
					thumbnailWidth="40px"
					style={{
						textAlign: "center",
						maxWidth: "380px",
						maxHeight: "500px",
						margin: "0 20px",
					}}
				/>
			</div>
			<div className="itemTop__centerInfo">
				<div className="itemTop__centerTitle">{ItemTitle}</div>
				<div className="itemTop__centerRate">
					<div className="stars">
						<FontAwesomeIcon icon={faStar} className="red" />
						<FontAwesomeIcon icon={faStar} className="red" />
						<FontAwesomeIcon icon={faStar} className="red" />
						<FontAwesomeIcon icon={faStar} className="red" />
						<FontAwesomeIcon icon={faStar} className="grey" />
					</div>
					{isRatesCount}
					{isDeliverd}
				</div>
				<div className="line"></div>
				<div className="itemTop__centerProperty">
					<div className="itemTop__centerPropertyTitle">Kolor</div>
					<div className="itemTop__centerPropertyItems">
						<button className="itemTop__centerPropertyColor bg-red"></button>
						<button className="itemTop__centerPropertyColor bg-blue"></button>
						<button className="itemTop__centerPropertyColor bg-green"></button>
					</div>
				</div>
				<div className="itemTop__centerProperty">
					<div className="itemTop__centerPropertyTitle">Rozmiar</div>
					<div className="itemTop__centerPropertyItems">
						<button className="itemTop__centerPropertySize">S</button>
						<button className="itemTop__centerPropertySize">M</button>
						<button className="itemTop__centerPropertySize">L</button>
						<button className="itemTop__centerPropertySizeNotAvailable">XL</button>
					</div>
				</div>
				<div className="itemTop__centerProperty">
					<div className="itemTop__centerPropertyTitle">Ilość</div>
					<div className="itemTop__centerPropertyItems">
						<button className="itemTop__centerPropertyQuantityMinus" onClick={decrementCounter}>
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<div className="itemTop__centerPropertyQuantity">{counter}</div>
						<button type="button" className="itemTop__centerPropertyQuantityPlus" onClick={incrementCount}>
							<FontAwesomeIcon icon={faPlus} />
						</button>
						<div className="itemTop__centerPropertyQuantityLeft">Dostępna ilość: {QuantityLeft} szt</div>
					</div>
				</div>
				<div className="line"></div>
				<div className="itemTop__centerBlockBuy">
					<div className="itemTop__centerBookmark">
						<FontAwesomeIcon icon={faBookmark} style={{ fontSize: "20px" }} />
						<div>64</div>
					</div>
					<div className="itemTop__centerBuyButtons">
						<button type="button" className="itemTop__centerBtnBuy bg-grey">
							12,50 zł
						</button>
						<button type="button" className="itemTop__centerBtnBuyWide bg-red">
							12,50 zł
						</button>
					</div>
					<div className="itemTop__centerBlockBuyRight">
						<FontAwesomeIcon icon={faPlus} />
						<FontAwesomeIcon icon={faUserGroup} />
					</div>
				</div>
				<div className="itemTop__centerBlockFeatures">
					<div className="itemTop__centerBlockFeaturesItem">
						<FontAwesomeIcon icon={faCreditCard} className="itemTop__centerBlockFeaturesItemIcon" />
						<div>
							<div className="itemTop__centerBlockFeaturesItemTitle">Bezpieczne płatności</div>
							<div className="itemTop__centerBlockFeaturesItemSubtitle">Zabezpieczone przez Przelewy24</div>
						</div>
					</div>
					<div className="itemTop__centerBlockFeaturesItem">
						<FontAwesomeIcon icon={faShield} className="itemTop__centerBlockFeaturesItemIcon" />
						<div>
							<div className="itemTop__centerBlockFeaturesItemTitle">30 dni na zwrot</div>
							<div className="itemTop__centerBlockFeaturesItemSubtitle">Gwarancja zwrotu pieniędzy</div>
						</div>
					</div>
					<div className="itemTop__centerBlockFeaturesItem">
						<FontAwesomeIcon icon={faBoxOpen} className="itemTop__centerBlockFeaturesItemIcon" />
						<div>
							<div className="itemTop__centerBlockFeaturesItemTitle">Darmowa dostawa</div>
							<div className="itemTop__centerBlockFeaturesItemSubtitle">Oszczędzanie przy zakupach</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCenterBlock;
