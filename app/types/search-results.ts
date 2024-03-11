
export interface SearchProps {
    selectedResult?: string;
    onSelectResult: (country: string) => void;
}

export interface SearchResultsProps {
    searchQuery: string;
    query: string;
    onSelectResult: SearchProps['onSelectResult'];
}