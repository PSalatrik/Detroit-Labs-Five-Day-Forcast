import React from 'react';

const FiveDayItem = ({day}) => {
	return <div>On {day.dt_txt}it's going to be {day.main.temp} degrees out</div>
};

export default FiveDayItem;