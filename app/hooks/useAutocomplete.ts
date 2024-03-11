import { useCallback, useState } from "react";

const useAutocomplete = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>();

    const handleSetActive = useCallback((country: string) => {
        setSelected(country);
        setOpen(false);
    }, []);

    return { open, setOpen, selected, handleSetActive };
};

export default useAutocomplete;

