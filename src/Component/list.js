import React from "react";
import styled from "styled-components";
const ListStyles = styled.ul`
 li {
     list-style: none;
     display: flex;
     gap : 20px;
     div {
         div {
             display: flex;
             gap : 15px;
         }
     }
 }

`
export const List = ({ fistName, image, lastName, checked, onchange }) => {
    return (
        <ListStyles>
            <li onChange={onchange}>
                <img src={image}></img>
                <div>
                    <div>
                        <p>{fistName}</p>
                        <p>{lastName}</p>
                    </div>
                    <input type="checkbox" id="item" name="item"
                        checked={checked} />
                </div>
            </li>
            <hr></hr>
        </ListStyles>
    )
}
