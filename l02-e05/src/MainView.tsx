import React from 'react';
import { Listing } from './Listing';

export const MainView = () => (<div><Listing></Listing></div>)

export type Dict<T> = {
    [key:string]: T,
    [key:number]: T,
}