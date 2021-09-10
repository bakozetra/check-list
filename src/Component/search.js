import React from "react";
import styled from "styled-components";

const SearchStyles = styled.input`
    width: 100%;

`
export const Search = ({ text, onChange, placeholder }) => {
    return (
        <SearchStyles
            onChange={onChange}
            placeholder={placeholder}>{text}</SearchStyles>

    )
}