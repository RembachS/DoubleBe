import "./__SidebarItem.scss";

function SidebarItem(props) {
	const title = props.title;

	return (
		<a className="sidebar-item" href={props.href}>
			<img className="sidebar-item__img" src={props.src} alt={props.alt} />
			{title}
		</a>
	);
}

export default SidebarItem;
