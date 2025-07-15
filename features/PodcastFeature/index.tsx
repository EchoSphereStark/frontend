import Button from '@/components/Button';
import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import UploadFile from './components/UploadFile';
import Metadata from './components/Metadata';


export default function index() {
  const [file, setFile] = useState<File | null>(null);
  const [nameIndex, setNameIndex] = useState(0)
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('')

  return (
    <main>
      <section className="w-[96%] mx-auto">
      <h2 className="text-[24px] font-medium mt-8 md:hidden ">
            Upload New Podcast
          </h2>
          <p className=" text-[16px] font-normal mt-2 md:hidden">Drop your files</p>

        <section className="flex justify-center items-center gap-4 mt-4 md:mt-16">
          <div className="flex flex-col justify-center items-center">
          <div className={`${nameIndex >= 0 ? 'bg-[#6F0439] border-black ' : ''} border-[1px] w-10 h-10 rounded-full flex items-center justify-center`}>
            <FaCheckCircle size={20} className='text-[#CCCCCC] ' />
          </div>
          <p className="text-[12px] md:text-[14px] font-medium mt-2 text-center">Upload File</p>

          </div>
          <div className="border-b-[2px] w-[70px] md:w-[122px] border-[#6F0439]">

          </div>
          <div className="flex flex-col justify-center items-center">
          <div className={`${nameIndex >= 1 ? 'bg-[#6F0439] border-black ' : 'border-[#CCCCCC]'} border-[1px] w-10 h-10 rounded-full flex items-center justify-center`}>
            <FaCheckCircle size={20} className='text-[#CCCCCC] ' />
          </div>
          <p className={`text-[12px] md:text-[14px] font-medium mt-2 text-center  ${nameIndex >= 1 ? 'text-black': 'text-[#CCCCCC]'}`}>Metadata</p>

          </div>
          <div className={`border-b-[2px] w-[70px] md:w-[122px]  ${nameIndex >= 1 ? 'border-[#6F0439]':'border-[#CCCCCC]'}`}>

          </div>
          <div className="flex flex-col justify-center items-center">
          <div className={`${nameIndex === 2 ? 'bg-[#6F0439] border-black ' : 'border-[#CCCCCC]'} border-[1px] w-10 h-10 rounded-full flex items-center justify-center`}>
            <FaCheckCircle size={20} className='text-[#CCCCCC] ' />
          </div>
          <p className={`text-[12px] md:text-[14px] font-medium mt-2 text-center  ${nameIndex === 2 ? 'text-black': 'text-[#CCCCCC]'}`}>Preview</p>

          </div>

        </section>

        <section className='mt-16 w-[90%] md:w-[70%] lg:w-[60%] 2xl:w-[50%] mx-auto'>
        
          {
            nameIndex === 0 &&
            <UploadFile file={file} setFile={setFile} />
          }
          {
            nameIndex === 1 && file !== null &&

            <Metadata file={file} tagInput={tagInput} setTagInput={setTagInput} tags={tags} setTags={setTags} category={category} setCategory={setCategory} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
          }
        </section>





        <div className="flex justify-center mt-4">
          <button onClick={() => {
            if (nameIndex === 0 && file !== null) {

              setNameIndex(nameIndex + 1)
            } else if (title !== '' && description !== '' && category !== '') {
              setNameIndex(nameIndex + 1)
            }
          }} className={`flex gap-2 items-center border-[1px] border-black bg-[#6F0439] px-12 py-4 rounded-full cursor-pointer`}>
            <p className="font-semibold text-[16px] leading-[100%] text-white">Proceed</p>
            <FaCircleArrowRight size={26} className="text-white" />
          </button>
        </div>

      </section>
    </main>
  )
}
