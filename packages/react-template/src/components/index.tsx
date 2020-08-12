import '../css/tailwind.css';
import React from 'react';

export interface IProps {
    color: string
    onClick?: (color: string) => void
}
export default (props: IProps) => {
    const {color, onClick} = props;
    return <button style={{color}} className="w-1 p-1" onClick={() => onClick && onClick(color)}>Color Button</button>
}
