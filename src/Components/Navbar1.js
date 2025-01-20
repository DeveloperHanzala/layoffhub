import styled from 'styled-components'

export const DropdownMenu = styled.div`
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
  width:30px;
  `
;

export const DropdownItem = styled.div `
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px; /* Increased font size */
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }`
;

export const Button2 = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    max-width: 200px;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    height: 41px;
    border-radius: 10px;
    border: 2px solid #7b2cbf;
    background-color: white;
    color: black;
    font-size: 16px; /* Increased font size */
    cursor: pointer;
    a {
      text-decoration: none;
    }

    &:hover {
      a {
        background-color: #7b2cbf;
        color: white;
      }
      background-color: #7b2cbf;
      color: white;
    }
  }`


;
export const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px; /* Increased font size */
  color: #333;
  padding: 8px 12px;
width: 100%;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-left: 8px;
  }`
;
export const Butto = styled.button`
  max-width: 200px;
  padding: 0px 10px;
  height: 41px;
  border-radius: 5px;
  border: 2px solid rgb(0, 102, 255);
  background-color: white;
  color: black;
  font-size: 16px; /* Increased font size */
  cursor: pointer;
  a {
    text-decoration: none;
  }

  &:hover {
    a {
      background-color: rgb(0, 102, 255);
      color: white;
    }
    background-color: rgb(0, 102, 255);
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }`
;
export const Button1 = styled.button`
  max-width: 200px;
  padding: 0px 10px;
  height: 41px;
  border-radius: 5px;
  border: 2px solid rgb(0, 102, 255);
  background-color: rgb(0, 102, 255);
  color: white;
  font-size: 16px; /* Increased font size */
  cursor: pointer;
  a {
    text-decoration: none;
  }

  &:hover {
    a {
      background-color: rgb(0, 102, 255);
      color: white;
    }
    background-color: white;
    color: rgb(0, 102, 255);
  }
  @media (max-width: 500px) {
    display: none;
  }`
;