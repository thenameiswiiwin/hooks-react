import useTabs from '../hooks/useTabs';
import Tab from './Tab';

const tabs = [
	{ id: 0, name: 'Tab No.1', content: 'Content of Tab No.1' },
	{ id: 1, name: 'Tab No.2', content: 'Content of Tab No.2' },
	{ id: 2, name: 'Tab No.3', content: 'Content of Tab No.3' },
	{ id: 3, name: 'Tab No.4', content: 'Content of Tab No.4' },
];

export default function Tabs() {
	const { isActive, setIsActive } = useTabs(0, tabs);

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<ul className="list-u">
				<Tab
					tabs={tabs}
					isActive={isActive}
					setIsActive={setIsActive}
					activeStyle="activeTab-1"
					inActiveStyle="inactiveTab-1"
				/>
			</ul>
			<div className="w-80 bg-white p-16 text-center mx-auto border">
				{isActive.content}
			</div>
			<ul className="list-u">
				<Tab
					tabs={tabs}
					isActive={isActive}
					setIsActive={setIsActive}
					activeStyle="activeTab-2"
					inActiveStyle="inactiveTab-2"
				/>
			</ul>
		</div>
	);
}

// ? 'cursor-pointer py-3 px-4 rounded transition bg-green-500 text-white'
// : 'cursor-pointer py-3 px-4 rounded transition'
