import {render, screen, cleanup} from '@testing-library/react';
import CarouselComponent from './carousel';
test("Carousel renders correctly",  () => {
    render(<CarouselComponent/>);
    const carousel = screen.getByTestId('carouselTestId');
    expect(carousel).toBeInTheDocument();
    expect(carousel).toHaveTextContent('30 Minuets')
})