import React from 'react';

export default function Header( {text} ){
	return(
		<header>
		 <h2 data-test-id="h2-tag">{text}</h2>
		</header>
		);
}