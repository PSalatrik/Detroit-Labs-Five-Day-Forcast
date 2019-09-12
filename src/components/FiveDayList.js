import React from 'react';
import FiveDayItem from './FiveDayItem';

const FiveDayList = ({allDays}) =>{

	const renderedList = allDays.map( (day) => {
		return <FiveDayItem day={day} />;
	});

	return (
		<div>
		 {renderedList}
		</div>
		)
}

export default FiveDayList;