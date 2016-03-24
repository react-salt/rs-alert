import React from 'react';

let Alert = function(props) {
    let prefixName = props.prefixName ? props.prefixName : 'salt';
    return (
        <div className={`${prefixName}-alert ${prefixName}-alert-${props.myStyle}`}>
            {props.children}
        </div>
    );
}

export default Alert;
