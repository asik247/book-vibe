import React, { useState } from 'react';

const HookF = () => {
    const [v,setV] = useState("");
    const handle = ()=>{
       console.log(v);
    }
    return (
        <div>
            <form>
                <input type="text" value={v} onChange={()=>setV()} placeholder='your name' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <button onClick={handle} className='btn btn-primary'>subMit</button>
            </form>
        </div>
    );
};

export default HookF;