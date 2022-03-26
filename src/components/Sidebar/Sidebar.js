import "./__Sidebar.scss";

import SidebarItem from "./SidebarItem";

// IMG
import navigationImgUrl from "../../assets/img/icons/sidebar/navigation.svg";
import popularImgUrl from "../../assets/img/icons/sidebar/popular.svg";
import brandsImgUrl from "../../assets/img/icons/sidebar/brands.svg";
import lastWatchedImgUrl from "../../assets/img/icons/sidebar/lastWatched.svg";
import fashionImgUrl from "../../assets/img/icons/sidebar/fashion.svg";
import accessoriesImgUrl from "../../assets/img/icons/sidebar/accessories.svg";
import booksImgUrl from "../../assets/img/icons/sidebar/books.svg";
import musicImgUrl from "../../assets/img/icons/sidebar/music.svg";
import sportImgUrl from "../../assets/img/icons/sidebar/sport.svg";
import hobbyImgUrl from "../../assets/img/icons/sidebar/hobby.svg";
import cdImgUrl from "../../assets/img/icons/sidebar/cd.svg";
import videoGamesImgUrl from "../../assets/img/icons/sidebar/videoGames.svg";
import womensClothingImgUrl from "../../assets/img/icons/sidebar/womensClothing.svg";
import mensClothingImgUrl from "../../assets/img/icons/sidebar/mensClothing.svg";
import toysForChildrenImgUrl from "../../assets/img/icons/sidebar/toysForChildren.svg";
import elseImgUrl from "../../assets/img/icons/sidebar/else.svg";

function Sidebar() {
	const sidebarDataFirst = [
		{ id: 1, title: "Nawigacja", alt: "navigation", src: navigationImgUrl, href: "#" },
	];

    const sidebarDataSecond  = [
		{ id: 2, title: "Popularne", alt: "popular", src: popularImgUrl, href: "#" },
		{ id: 3, title: "Brandy", alt: "brands", src: brandsImgUrl, href: "#" },
		{ id: 4, title: "Ostatnio oglądane", alt: "lastWatched", src: lastWatchedImgUrl, href: "#" },
	];

    const sidebarDataThird = [
		{ id: 5, title: "Moda", alt: "fashion", src: fashionImgUrl, href: "#" },
		{ id: 6, title: "Akcesoria", alt: "accessories", src: accessoriesImgUrl, href: "#" },
		{ id: 7, title: "Książki", alt: "books", src: booksImgUrl, href: "#" },
		{ id: 8, title: "Muzyka", alt: "music", src: musicImgUrl, href: "#" },
		{ id: 9, title: "Sport", alt: "sport", src: sportImgUrl, href: "#" },
		{ id: 10, title: "Hobby", alt: "hobby", src: hobbyImgUrl, href: "#" },
		{ id: 11, title: "CD", alt: "cd", src: cdImgUrl, href: "#" },
		{ id: 12, title: "Video games", alt: "video games", src: videoGamesImgUrl, href: "#" },
		{ id: 13, title: "Odzież damskaacja", alt: "women's clothing", src: womensClothingImgUrl, href: "#" },
		{ id: 14, title: "Odzież męska", alt: "men's clothing", src: mensClothingImgUrl, href: "#" },
		{ id: 15, title: "Zabawki dla dzieci", alt: "toys for children", src: toysForChildrenImgUrl, href: "#" },
		{ id: 16, title: "Coś jeszcze", alt: "else", src: elseImgUrl, href: "#" },
	];

	const sidebarTopContent = sidebarDataFirst.map(function (item) {
		return <SidebarItem key={item.id} title={item.title} src={item.src} alt={item.alt} href={item.href} />;
	});

    const sidebarMiddleContent = sidebarDataSecond.map(function (item) {
		return <SidebarItem key={item.id} title={item.title} src={item.src} alt={item.alt} href={item.href} />;
	});

    const sidebarBottomContent = sidebarDataThird.map(function (item) {
		return <SidebarItem key={item.id} title={item.title} src={item.src} alt={item.alt} href={item.href} />;
	});

	return (
			<div className="sidebar">
				{sidebarTopContent}
                <div className="line"></div>
				{sidebarMiddleContent}
                <div className="line"></div>
                {sidebarBottomContent}
			</div>
	);
}

export default Sidebar;
