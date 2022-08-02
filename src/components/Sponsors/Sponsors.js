import React from "react";
import title from "../../assets/sponsors/title.png";
export const Sponsors = () => {
  return (
    <>
    <br/><br/><br/><br/>
  <div className="flex flex-row justify-center">
    <div className="flex flex-row justify-center bg-neutral-800 rounded-t-[1rem] w-[90%] mt-3">
        <div className="flex flex-col justify-center">
      <div>
        <div className="text-white font-mono text-3xl mt-5 mb-5">
          Title Sponsor
        </div>
        <div className="flex flex-row justify-center">
        <img   className="w-72" src={title} alt="valeo" />
        </div>
        
      </div>
      <div className="text-white font-mono text-3xl mt-5 mb-5">
          Other Sponsors
        </div>
      <div className="flex flex-row justify-evenly flex-wrap">
<img className="w-64 m-3" src = "https://images.indianexpress.com/2021/10/CVJ.CH-Polygon-Network-1-1.png"/>
<img className="w-64 m-3" src = "https://financialit.net/sites/default/files/moralis.png" />
<img className="w-64 m-3" src = "https://cdn.shopify.com/s/files/1/0356/9850/7909/files/zebronics-logo_3be1b761-61a1-402b-bb99-d00ca18ab76e.png?height=628&pad_color=fff&v=1639195287&width=1200"/>
     <img className="w-64 m-3" src = "https://image3.mouthshut.com/images/imagesp/925745841s.jpg"/>
      </div>
      </div>
     
      </div>
    
    </div>
    
    </>
  );
};
