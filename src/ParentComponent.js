import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent(props) {
    const [count,setCount] = useState(10);
    let name = "Xuyen";
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Click</button>
            <h1>Day la cha nek: {count}</h1>
            <ChildComponent countXXX = {count}
             nameXXX = {name}/>
        </div>
    );
}

export default ParentComponent;