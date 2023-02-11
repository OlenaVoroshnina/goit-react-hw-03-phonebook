import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 8px;
  padding: 0.6rem 0;
  margin: 0.5rem 0rem;
  width: 7rem;
  font-size: 16px;
  color: white;
  background-color: #4503fa;
  border: 2px solid white;
  cursor: pointer;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 630px;
    list-style-type: none;
`