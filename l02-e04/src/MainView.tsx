import React from 'react';
import { Listing } from './Listing';

export class MainView extends React.Component{
    constructor(props:any){
        super(props)
    }

    render(){
        return (<div><Listing></Listing></div>)
    }
}