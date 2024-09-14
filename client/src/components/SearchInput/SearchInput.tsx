"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {  // How to type components - React.FC? Return type is implied?
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/movies/search?q=${encodedSearchQuery}`);
    }

    return (
        <form 
            className={styles.form} 
            onSubmit={onSearch}>
            <input
                className={styles.input}
                value={searchQuery}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSearchQuery(event.target.value)}
                placeholder="Enter a Movie Title Here..."/>
            <button 
                className={styles.button} 
                type="submit">
                Search
            </button> 
        </form>
    );
}

export default SearchInput;
