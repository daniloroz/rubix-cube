import React, { Component } from 'react';
import styled from 'styled-components';


class Button extends React.Component {
    render() {
        return (
          <StyledButton>
            {this.props.text}
          </StyledButton>
        );
    }
}

const StyledButton = styled.button `
    background-color: #ff4081;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    outline: 0;
    text-transform: uppercase;
    box-shadow: 0px 2px 2px lightgray;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #c51162;
    }
`

export default Button;