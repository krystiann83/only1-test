import {
    CommandItem,
    CommandList,
    CommandEmpty,
} from '@/components/ui/command';

import { useSearch } from '../api/queries';
import useDebouncedQuery from '../hooks/useDebouceQuery';
import { SearchResultsProps } from '../types/search-results';
import SearchStatus from './search-status';

function SearchResults({
    query,
    onSelectResult,
    searchQuery,
}: SearchResultsProps) {
    const debouncedQuery = useDebouncedQuery(query, 500);
    const { results, isLoading, isError } = useSearch(debouncedQuery);
    return (
    <>
    <CommandEmpty>
        <SearchStatus
            isLoading={isLoading}
            isError={isError}
            results={results}
            searchQuery={searchQuery}
        />
    </CommandEmpty>
    <CommandList>
        {results?.map(({ name: { common } }: { name: { common: string } }) => {
            return (
                <CommandItem
                    key={common}
                    onSelect={() => {
                        console.log('common', common);
                        return onSelectResult(common);
                    }}
                    value={common}
                    >
                    {common}
                </CommandItem>
            );
        })}
    </CommandList>
    </>
    );
}

export default SearchResults;
