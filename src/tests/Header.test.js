import React from 'react';
import{ render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';


afterEach(cleanup);

it("renders", ()=>{
	const {asFragment} = render(<Header text="Hello" />);
	expect(asFragment()).toMatchSnapshot();
});

if("inserts in h2", () =>{
	const {getByTestID, getByText} = render(<Header text="Hello" />);

	expect(getByTestID('h2-tag')).toHaveTextContent("Hello");

});
