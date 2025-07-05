import React, { useEffect, useState } from "react";
import Publictions from "../Pages/Publications";
import DevelopPublication from "../Pages/DevelopPublications";

const ResponivePublications:React.FC=()=>{

    const [largescreen,islargescreen]=useState<boolean>(window.innerWidth>=1024)
    useEffect(()=>{
        const HandleSize =()=>{
            islargescreen(window.innerWidth >= 1024)
        };
        window.addEventListener('resize',HandleSize);
    },[]);

    return largescreen ? <Publictions/> : <DevelopPublication/>
}
export default ResponivePublications;