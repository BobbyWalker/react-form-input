import React from 'react'
import styled, {css} from 'styled-components'

const mainColor = 'black';
const mainColorInverted = 'white';
const subColor = 'grey';
const subColorInverted = 'lightgrey';

const shrinkLabel = css`
    top: -15px;
    font-size: 12px;
    transform: translateY(0);
    color: ${props => props.light ? mainColorInverted : mainColor};
`

export const FormInputGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;
export const FormInputLabel = styled.label`
    color: ${props => props.light ? subColorInverted : subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: 300ms ease all;
    ${props => props.shrink && shrinkLabel};
    `;

export const FormInputText = styled.input`
    background: none;
    background-color: transparent;
    color: ${props => props.light ? subColorInverted : subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.light ? subColorInverted : subColor};
    margin: 25px 0;
    
    letter-spacing: ${props => props.type === 'password' ? '0.3em' : 'inherit'};
    
    &:focus {
        outline: none;
    }
    &:focus ~ ${FormInputLabel} {
            ${shrinkLabel}
        }
`;

const FormInput = ({
    handleChange,
    containerClasses,
    labelClasses,
    inputClasses,
    label,
    ...otherProps}) => (
    <FormInputGroup className={ containerClasses}>
        <FormInputText onChange={handleChange}
                       className={inputClasses}
                        {...otherProps}/>
        {label &&
            <FormInputLabel className={labelClasses}
                            light={otherProps.light}
                            shrink={otherProps.value.length}>
                {label}
            </FormInputLabel>
        }
    </FormInputGroup>
)

export default FormInput
