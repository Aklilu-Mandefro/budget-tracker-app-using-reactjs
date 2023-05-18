
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

//Create a new component called Budget
const Budget = () => {
	const { budget } = useContext(AppContext);

	return (
		<div className='alert alert-secondary'>
			<span>Budget: £{budget}</span>
		</div>
	);
};

export default Budget;