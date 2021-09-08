import { useState } from 'react';

export default function useTabs(initialTab, allTabs) {
	const [currentTab, setCurrentTab] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		isActive: allTabs[currentTab],
		setIsActive: setCurrentTab,
	};
}
