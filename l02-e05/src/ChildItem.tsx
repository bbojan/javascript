import React from 'react';

export interface ChildItemProps{
    text:string;
    checked:boolean;
    onChecked:(checked:boolean) => void;
}

export const ChildItem = (props:ChildItemProps) =>{
    return (
        <div>
            <input type="checkbox" checked={props.checked} 
            onChange={(e:any) => props.onChecked(e.target.checked)}>
            </input>
            <span>{props.text}</span>
        </div>
    )
}

