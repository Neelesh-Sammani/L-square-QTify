import React from "react";
import {ReactComponent as SearchIcon} from "./searchIcon.svg";
import './Search.css';

const SearchBox = () => {
    return <form className="form">
        <input placeholder='Search an album of your choice' className="input"/>
        <button className="searchIcon">
        <SearchIcon width={20} height={20} />
        </button>
    </form>;
}

export default SearchBox;