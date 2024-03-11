import { useEffect, useState } from "react";

const useDebouncedQuery = (query: string, delay: number) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query, delay]);

    return debouncedQuery;
};

export default useDebouncedQuery;
