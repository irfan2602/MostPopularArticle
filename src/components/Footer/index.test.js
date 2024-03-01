import React from "react";
import {render} from '@testing-library/react'
import Footer from "./Footer";
test('render footer component', () => {
    const {getByText} = render(<Footer />)
    expect(getByText('Footer')).toBeInTheDocument()
})