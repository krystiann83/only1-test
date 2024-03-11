import {
    renderHook,
    act
} from '@testing-library/react-hooks';
import useAutocomplete from '../useAutocomplete';

describe('useAutocomplete', () => {
    it('should initialize with default values', () => {
        const {
            result
        } = renderHook(() => useAutocomplete());

        expect(result.current.open).toBe(false);
        expect(result.current.selected).toBeUndefined();
    });

    it('should allow setting open state', () => {
        const {
            result
        } = renderHook(() => useAutocomplete());

        act(() => {
            result.current.setOpen(true);
        });

        expect(result.current.open).toBe(true);
    });

    it('should allow selecting a country and close the dropdown', () => {
        const {
            result
        } = renderHook(() => useAutocomplete());

        act(() => {
            result.current.handleSetActive('Canada');
        });

        expect(result.current.selected).toBe('Canada');
        expect(result.current.open).toBe(false);
    });
});