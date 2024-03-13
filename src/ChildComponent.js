import React from 'react';
function ChildComponent(props) {
    let {countXXX,nameXXX} = props;
    return (
        <div>
            <h1>Day la con nek: {countXXX} {nameXXX}</h1>
        </div>
    );
}

export default ChildComponent;