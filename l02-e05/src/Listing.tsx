import React from 'react';
import { ChildItem } from './ChildItem';
import { Dict } from './MainView';

export interface ListingProps{
}

export const Listing = (props:ListingProps) =>{
    const items = ['A','B','C'];

    const [checkedMap, setCheckedMap] = React.useState<Dict<boolean>>({});

    return (<div>
        {items.map(k => 
            (<ChildItem 
            key={k} 
            checked={checkedMap[k]} 
            onChecked={(checked:boolean) => {
                setCheckedMap({
                    ...checkedMap,
                    [k]:checked
                })
            }} 
            text={"Check " + k} />))}            
    </div>)
}