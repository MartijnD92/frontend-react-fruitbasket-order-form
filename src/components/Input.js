import React from 'react';

export default function Input({ name, type, fieldRef, error, children }) {
	return (
		<>
			<label htmlFor={name}>{children}</label>
			{type === 'text' || type === 'number' ? error : ''}
			<input id={name} name={name} type={type} ref={fieldRef} min={type === 'number' ? '1' : ''}/>
			{type === 'checkbox' ? error : '' }
		</>
	);
}
