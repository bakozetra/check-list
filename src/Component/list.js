import React from "react";
import styled from "styled-components";
const ListStyles = styled.ul`
 li {
     list-style: none;
     display: flex;
     gap : 20px;
 }

`
export const List = ({ name, mail, image }) => {
    return (
        <ListStyles>
            <li>
                <img src={image}></img>
                <div>
                    <p>{name}</p>
                    <a>{mail}</a>
                </div>
            </li>
            <hr></hr>
        </ListStyles>
    )
}
