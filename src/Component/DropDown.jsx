import React, { useMemo, useState } from "react";

const DropDown = (props) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOpt, setSelectedOpt] = useState(props.options[0]);

    return (
        <>
            <div  className="h-auto w-full my-2  flex flex-col justify-center items-center relative">
                <button onClick={() => setShowOptions(!showOptions)} className="w-full h-20 rounded-md border-[1px] border-slate-400">{selectedOpt}</button>
                {
                    (showOptions) ?
                    <div className="transition duration-500 h-auto w-full absolute rounded-md border-[1px] border-slate-400 top-20 mt-2 z-10 flex flex-col items-center justify-center ">
                        
                        <button onClick={()=>{
                            setSelectedOpt(props.options[0]);
                            setShowOptions(false);
                            }} className="h-16 w-full p-5 bg-white hover:bg-slate-100 rounded-md">{props.options[0]}
                        </button> 
                        <button onClick={()=>{
                            setSelectedOpt(props.options[1]);
                            setShowOptions(false);
                            }} className="h-16 w-full p-5 bg-white hover:bg-slate-100 rounded-md">{props.options[1]}
                        </button> 
                        <button onClick={()=>{
                            setSelectedOpt(props.options[2]);
                            setShowOptions(false);
                            }} className="h-16 w-full p-5 bg-white hover:bg-slate-100 rounded-md">{props.options[2]}
                        </button>  
                    </div>      
                    :
                    <>
                    </>
                }

            </div>
        </>
    )
}

export default DropDown;