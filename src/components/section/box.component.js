import React from 'react';
import {Containerone} from './container_one/container_one.component';
import {Containertwo} from './container_two/container_two.component';


export const Box = () => {
    return(
        <section class="box">
            <Containerone />
            <Containertwo />
        </section>
    
    );
}