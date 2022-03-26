import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import "./__itemLeftBlock.scss";

// IMG
import itemManImg from "../../../assets/img/item/item-man.png";

function ItemLeftBlcok() {
	return (
		<div className="itemtTop__left">
			<button className="itemTop__leftBack">
				<FontAwesomeIcon icon={faArrowLeftLong} />
				Wstecz
			</button>
			<button className="itemTop__avatarItem">
				<img className="itemTop__avatar" src={itemManImg} alt="img" />
				<p>
					<span>Fergus Mcleod</span>ogląda ten towar
				</p>
			</button>
		</div>
	);
}

export default ItemLeftBlcok;
