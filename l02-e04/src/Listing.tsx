import React from 'react';
import { ChildItem } from './ChildItem';

export interface ListingProps{
}

export interface ListingState{
    checkedMap:{
        [key:string]:boolean
    }
}


export class Listing extends React.Component<ListingProps,ListingState>{
    constructor(props:ListingProps){
        super(props);

        this.state = 
        { 
            dummy:42,
            checkedMap: {},
        } as ListingState;
    }

    private onChecked(key:string, checked:boolean):  void{
        // this.setState(
        //     {
        //         checkedMap:{
        //             [key]:checked
        //         }
        //     });

        this.setState((state)=>{
                state.checkedMap[key] = checked;
            });

        // this.setState((state:ListingState)=>({
        //     checkedMap:{
        //         ...state.checkedMap,
        //         [key]:checked
        //     }
        // }));
    }
    
    render(){
        const items = ['A','B','C']

        return (<div>
            {items.map(k => 
                (<ChildItem 
                key={k} 
                checked={this.state.checkedMap[k]} 
                onChecked={this.onChecked.bind(this, k)} 
                text={"Check " + k} />))}            
        </div>)
    }
}