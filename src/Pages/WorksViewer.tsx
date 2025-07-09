import React, { useEffect, useState } from "react";
import Myworks from "./Myworks";
import SmallWorks from "./SmallWorks";

const WorkViewer:React.FC=()=>{
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
        useEffect(() => {
            const checkScreen = () => {
              setIsLargeScreen(window.innerWidth >= 1024);
            };
        
            checkScreen();
            window.addEventListener("resize", checkScreen);
        
            return () => window.removeEventListener("resize", checkScreen);
          }, []);

    return(
        <section>
            {isLargeScreen ? <Myworks/> : <SmallWorks/>}
        </section>
    );
}
export default WorkViewer;