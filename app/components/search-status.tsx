import { SearchStatusProps } from "../types/search-status";

const SearchStatus = ({ isLoading, isError, results, searchQuery }: SearchStatusProps) => {
    if (isLoading) return <div className="p-4 text-sm">Searching...</div>;
    if (isError) return <div className="p-4 text-sm">Something went wrong</div>;
    if (!results?.length && searchQuery) return <div className="p-4 text-sm">No products found</div>;
    return null;
};

export default SearchStatus;