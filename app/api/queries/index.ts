import {
    useQuery
} from '@tanstack/react-query';
import {
    fetchQueryResults
} from '../services';

export const useSearch = (query: string) => {
    const {
        data: results,
        isLoading,
        isError
    } = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchQueryResults(query),
        enabled: !!query,
    });

    return {
        results,
        isLoading,
        isError
    };
};