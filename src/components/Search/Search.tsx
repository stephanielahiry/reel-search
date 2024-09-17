"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
    const searchParams = useSearchParams();
    const initialSearchQuery = searchParams.get("q") || ""; 
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

    const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/search?q=${encodedSearchQuery}`);
    }
    
    return (
        <form 
            className={styles.form} 
            onSubmit={onSearch}>
            <input
                className={styles.input}
                value={searchQuery}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSearchQuery(event.target.value)}
                placeholder="Enter a Movie Title..."/>
            <button 
                className={styles.button} 
                type="submit"
                disabled={searchQuery.trim() === ""}>
                Search
            </button> 
        </form>
    );
}

export default Search;
