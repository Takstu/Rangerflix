import React from 'react';


function Buttonlink(props)
{
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default Buttonlink;