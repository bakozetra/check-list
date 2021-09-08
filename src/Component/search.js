import React from "react";

export const Search = ({ text, onChange }) => {
    return (
        <input onChange={onChange}>{text}</input>
    )
}