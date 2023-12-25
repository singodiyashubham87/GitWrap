import { useEffect } from "react";
import moveCursor from "../utils/moveCursor";

const Cursor = () => {

    useEffect(()=>{
        moveCursor();
    })

  return (
    <>
        <div className="cursor-dot fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[10] pointer-events-none w-[5px] h-[5px] bg-white" id="cursorDot"></div>
        <div className="cursor-outline fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-[10] pointer-events-none w-[30px] h-[30px] border-[2px] border-text-neutral-400" id="cursorOutline"></div>
    </>
  )
}

export default Cursor;
