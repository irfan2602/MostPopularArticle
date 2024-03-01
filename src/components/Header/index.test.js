import React from "react";
import {render} from '@testing-library/react'
import Header from "./Header"; 

test('render header component', () => {
    const {getByText} = render(<Header />)
    expect(getByText('Most Popular Article List')).toBeInTheDocument()
})