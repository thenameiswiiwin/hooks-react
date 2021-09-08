export default function Tab({ tabs, isActive, setIsActive, activeStyle, inActiveStyle }) {
	return tabs.map((tab) => (
		<li
			key={tab.id}
			onClick={() => setIsActive(tab.id)}
			className={isActive.id === tab.id ? activeStyle : inActiveStyle}
		>
			{tab.name}
		</li>
	));
}
