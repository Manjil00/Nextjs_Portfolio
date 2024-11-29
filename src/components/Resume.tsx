import React from 'react'
import { RiDownloadLine } from "react-icons/ri";

function Resume() {
return (
    <div className="Resume  w-auto h-auto mt-10 text-sm lg:text-xl rounded-xl bg-bgcolor">
    <a
    href='./resume/ManjilMaharjan_Resume.pdf'
    download="ManjilMaharjan_Resume.pdf">
    <button className='button-default flex justify-start items-center gap-3 p-2 rounded-2xl text-slate-500'>
    <RiDownloadLine />Download Resume</button>
    </a>
    </div>
)
}

export default Resume;
