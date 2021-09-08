import { useState } from 'react';

export default function useInput(initialValue, validator) {
	const [value, setValue] = useState('');
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
}
