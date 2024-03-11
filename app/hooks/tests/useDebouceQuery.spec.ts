import { renderHook } from '@testing-library/react-hooks';
import useDebouncedQuery from '../useDebouceQuery';

describe('useDebouncedQuery', () => {
    it('should return the initial query', () => {
        const { result } = renderHook(() => useDebouncedQuery('initial', 500));

        expect(result.current).toBe('initial');
    });

    it('should return the updated query after the delay', () => {
        const { result, rerender } = renderHook(({ query, delay }) => useDebouncedQuery(query, delay), {
            initialProps: { query: 'initial', delay: 500 }
        });

        rerender({ query: 'updated', delay: 500 });
        expect(result.current).toBe('initial');

        jest.advanceTimersByTime(500);
        expect(result.current).toBe('updated');
    });

    it('should cancel the timeout on unmount', () => {
        const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
        const { unmount } = renderHook(() => useDebouncedQuery('query', 500));

        unmount();
        expect(clearTimeoutSpy).toHaveBeenCalled();
    });

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });
});
