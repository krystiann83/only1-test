'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '@/components/ui/button';
import { Search } from './search';
import useAutocomplete from '../hooks/useAutocomplete';

export function Autocomplete() {
    const { open, setOpen, selected, handleSetActive } = useAutocomplete();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <Button
                variant="outline"
                role="combobox"
                className={'justify-between w-[250px]'}
            >
                {selected ? selected : 'Select country'}
            </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" className={'p-0 w-[250px]'}>
                <Search selectedResult={selected} onSelectResult={handleSetActive} />
            </PopoverContent>
        </Popover>
    );
}

export default Autocomplete
