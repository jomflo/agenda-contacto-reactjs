import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { NewContact } from '../components/NewContact';
export function RoutesApp(){
    return(
        <Routes>
            <Route />
        <Route />
        <Route path="*" element={<h1>Error!!! Pagina No Encontrada</h1>}/>
      </Routes>
    )
}