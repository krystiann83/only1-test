
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchStatus from '../search-status';
import '@testing-library/jest-dom';

describe('SearchStatus Component', () => {
    it('renders "Searching..." when isLoading is true', () => {
        render(<SearchStatus isLoading={true} isError={false} results={[]} searchQuery="" />);
        expect(screen.getByText('Searching...')).toBeInTheDocument();
    });

    it('renders "Something went wrong" when isError is true', () => {
        render(<SearchStatus isLoading={false} isError={true} results={[]} searchQuery="" />);
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('renders "No products found" when there are no results and searchQuery is not empty', () => {
        render(<SearchStatus isLoading={false} isError={false} results={[]} searchQuery="shoes" />);
        expect(screen.getByText('No products found')).toBeInTheDocument();
    });

    it('renders nothing when there are results', () => {
        const { container } = render(<SearchStatus isLoading={false} isError={false} results={[{ id: 1, name: 'Product' }]} searchQuery="" />);
        expect(container).toBeEmptyDOMElement();
    });
});
