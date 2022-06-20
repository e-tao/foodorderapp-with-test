import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe('Header Tests', ()=>{

    it("has a title", ()=>{
        render(<Header />);
        const titleElement = screen.getByText("Smart Choice Meals");
        expect(titleElement).toBeInTheDocument();
    })


    it("has a button", ()=>{
        render(<Header />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })


    it("has a image", ()=>{
        render(<Header />);
        const imgElement = screen.getByTestId('headerImg');
        expect(imgElement).toBeInTheDocument();
    })

    
    it("has a alt", ()=>{
        render(<Header />);
        const altElement = screen.getByAltText('A table full of delicious food!');
        expect(altElement).toBeInTheDocument();
    })
})