import React from 'react';

export default function RadioButton({ list, value, error, fieldRef, children }) {

	return (
		<li>
			<input
                id={value}
				name={list}
				type="radio"
				value={value}
				ref={fieldRef}
			/>
			<label htmlFor={value}>{children}</label>
		</li>
	);
}
