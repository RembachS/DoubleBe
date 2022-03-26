import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import "./__itemRightBlock.scss";

function ItemRightBlock() {
	return (
		<div className="itemtTop__right">
			<div className="itemtTop__report">
				Zgłosić ofertę <FontAwesomeIcon icon={faCircleInfo} className="itemtTop__reportIcon" />
			</div>
			<div className="itemtTop__id">ID: 342345</div>
		</div>
	);
}

export default ItemRightBlock;
