export interface SearchStatusProps {
    isLoading: boolean;
    isError: boolean;
    results: any[] | undefined;
    searchQuery: string;
}
