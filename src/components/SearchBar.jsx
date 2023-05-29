import React, { useState, useEffect } from "react";
import { ReactComponent as SearchSolid } from "../assets/imgs/search-solid.svg";
import "../App.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        if (value === "") {
            return setResults([]);
        }

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
            );
            const data = await response.json();
            if (data.drinks) {
                const filteredResults = data.drinks.filter((drink) =>
                    drink.strDrink.toLowerCase().includes(value.toLowerCase())
                );
                setResults(filteredResults);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        fetchData(input);
    }, [input]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    return (
        <div className="input-wrapper">
            <SearchSolid id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
};
