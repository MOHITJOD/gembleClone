import React from "react";
import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landingPage/home/Hero";

//test suite

describe('hero component', () => {
    test('render hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('hero-Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'assets/images/homeHero.png');
    })
})  