import { ArrowBigLeft, MousePointer2, MoveRight } from "lucide-react";

function Buttons() {
    return (
    //Blue Button 
    <div className="flex gap-4 ">
    <div>
          <button className="bg-blue-500 h-[50px] w-[150px] text-white rounded-md border flex flex-row p-3 ps-4 m-3 hover:bg-blue-950 gap-3">
               <span className=" transform transition hover:-translate-x-2">
                Live Chat 
                </span> 
                <span>
                    <MousePointer2 className="transform transition hover:translate-x-3 " />

                </span>
            </button>
    </div>
    <div>
      <button className="bg-white h-[50px] w-[150px] transition-all text-red-600 rounded-md  border-red-500 flex flex-row p-3 ps-4 m-3 gap-3 hover:text-white hover:border-white hover:bg-red-600 border-2">
      <span className=" transform transition hover:-translate-x-3">
       Order Now
       </span> 
       <span>
           <MoveRight className=" "/>

       </span>
   </button>
          
</div>
</div>
            
            
        
    );
}

export default Buttons;