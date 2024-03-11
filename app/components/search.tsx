'use client'
import React, { useState } from 'react';
import SearchResults from './search-results';

import {
Command,
CommandInput,
} from '@/components/ui/command';
import { SearchProps } from '../types/search-results';

export function Search({ onSelectResult }: SearchProps) {
    const [searchQuery, setSearchQuery] = useState('');

    console.log('searchQuery', searchQuery);
    
    const handleSelectResult = (country: string) => {
    onSelectResult(country);
    };

    return (
        <Command
        // shouldFilter={false}
            className="h-auto rounded-lg border border-b-0 shadow-md"
        >
            <CommandInput
                value={searchQuery}
                onValueChange={setSearchQuery}
                placeholder="Search for country"
            />

            <SearchResults
                query={searchQuery}
                onSelectResult={handleSelectResult}
                searchQuery={searchQuery}
            />
        </Command>
    );
}
