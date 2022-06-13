import React from 'react';

interface MassageProps {
	type: 'error' | 'help' | 'info',
	message?: string | undefined,
	showMessage?: boolean | undefined,
}

const Message = ({ type, message, showMessage = false }: MassageProps) => {
	return (
		<>
			{showMessage &&
				<div className={`input-message ${type}`}>
					{type === 'error' && <span>⚠️ </span>}
					<span>{message}</span>
				</div>
			}
		</>
	)
}

export default Message;
