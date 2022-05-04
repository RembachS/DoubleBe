import ItemCard from "./ItemCard";

import "./__ItemsList.scss";

import ItemsData from "../../data/items.json";

function ItemsList() {
    let ItemsListContent = ItemsData.map(function (item) {
        return (
            <ItemCard
                key={item.id}
                count={item.count}
                delivery={item.delivery}
                itemTitle={item.title}
                cardImg={item.img}
                tagTitle={item.tag.title}
                tagIcon={item.tag.icon}
                tagClass={item.tag.class}
                alt={item.tagTitle}
                itemCardFullPrice={item.fullPrice}
                itemCardPrice={item.price}
                itemLink={item.url}
                itemRate={item.rate}
                safe={item.isSafe}
                avatarsCount={item.avatarsCount}
            ></ItemCard>
        );
    });

    return (
        <div className="items-list">
            <div className="items-list__wrapper">{ItemsListContent}</div>
        </div>
    );
}

export default ItemsList;
