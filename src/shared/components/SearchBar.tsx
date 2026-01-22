import React, { useEffect } from 'react'

interface Props {

    placeholder: string;
    onQuery: (query: string) => void;
    // You can add props here if needed in the future
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

    const [query, setQuery] = React.useState('');

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeOutId);

        }

    }, [query, onQuery]);

    const handleSearch = () => {

       

        onQuery(query);

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">

            <input type="text" placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} />
            <button onClick={handleSearch}>Buscar</button>

        </div>
    )
}
