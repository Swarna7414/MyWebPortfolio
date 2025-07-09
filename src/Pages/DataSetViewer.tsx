import React, { useEffect, useState } from "react";
import DataSet from "./DataSet";
import DataSetMobile from "./SmallDataset";

const DataViewer:React.FC=()=>{
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreen = () => {
          setIsLargeScreen(window.innerWidth >= 768);
        };
    
        checkScreen();
        window.addEventListener("resize", checkScreen);
    
        return () => window.removeEventListener("resize", checkScreen);
      }, []);

      return(
        <div>
            {isLargeScreen ? <DataSet/> : <DataSetMobile/>}
        </div>
      );
}
export default DataViewer;