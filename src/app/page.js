import Image from "next/image";

export default function Home() {
  return (
    // main div 
    <div className="w-full h-[512px] bg-[#282828] flex flex-col space-x-10 justify-between  ">
        <div className="flex items-center justify-between mt-[45px] w-52 ">
          <div className="w-[30px] bg-[#CDCDCD] rounded-full ">
            
          </div>
          <div className="w-[161px] h-[21px] text-[#CDCDCD] font-semibold uppercase text-[13px]">
          we got you covered
          </div>

        </div>
        <div className="w-[522px] h-[120px] text-[#CDCDCD] font-extrabold text-[40px] uppercase mb-3 ">
          choose whatever fits your lifestyle  
        </div>
        {/* first card */}
        <div className="w-[250px] h-[250px] border-[0.5px] border-gray-500 rounded-[50px] p-4">
          <div className=" text-[#CDCDCD] text-center font-extrabold uppercase p-2">
            stronger in action
          </div>
          <div className="text-center text-[#CDCDCD] font-extralight text-[9px] p-1 ">
          The essence of collective empowerment through proactive engagement and decisive measures. 
          It signifies a commitment to meaningful progress,
          </div>
        </div>
          {/* second card */}
        <div className="w-[250px] h-[250px] border-[0.5px] rounded-[50px] border-gray-500 p-4 ">
          <div className="text-center text-[#CDCDCD] font-extrabold uppercase">
            customize down to the details 
          </div>
          <div className="text-center text-[#CDCDCD] font-extralight text-[13px] p-1 ">
          The essence of collective empowerment through proactive engagement and decisive measures.
           It signifies a commitment to meaningful progress,
          </div>
        </div>
          {/* third card */}
        <div className="w-[250px] h-[250px] border-[0.5px] rounded-[50px] border-gray-500 p-4">
          <div className="text-center font-extrabold text-[#CDCDCD] uppercase">
            Make it feel like home
          </div>
          <div className="font-extralight text-[#cdcdcd] text-center text-[9px] p-1">
          The essence of collective empowerment through proactive engagement and decisive measures. 
          It signifies a commitment to meaningful progress,
          </div>
        </div>
          {/* forth card  */}
        <div className="w-[250px] h-[250px] border-[0.5px] rounded-[50px] border-gray-500 p-4">
          <div className="text-center uppercases text-[#CDCDCD] font-extrabold text-[13px] p-4">
          Consult with Us 24/7
          </div>
          <div className="text-[#cdcdcd]  font-extralight text-center text-[13px] p-1">
            The essence of collective empowerment through proactive engagement and decisive measures. 
                      It signifies a commitment to meaningful progress,

          
          </div>
        </div>
        

       




































    </div>
    
  );
}
