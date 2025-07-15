import React from 'react'
import { IoIosCloudUpload } from "react-icons/io";

type UploadFileProps = {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
  };

export default function UploadFile({ file, setFile }:UploadFileProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setFile(e.target.files[0]);
        }
      };

  return (
    <section className="">
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#6F0439] rounded-lg py-20 bg-[#FFF6FB]">
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center"
      >
      
<IoIosCloudUpload size={46} className='text-[#6F0439] '/>
        <p className="text-black font-semibold text-lg mb-1">
        Drag and drop files here
        </p>
        {!file &&
            <>
        <p className="text-sm font-normal"> <span className="underline underline-offset-5"> Choose image</span> or Drag and drop

        </p>
        <span className="text-gray-500 text-sm mt-2">
          Maximum file - size 500mb
        </span>
            </>
        }
        {
        file &&
        <>
        <p className="text-sm font-normal text-center">{file.name}</p>
        <p className="text-gray-500 text-sm mt-2 text-center">
          {(file.size / (1024 * 1024)).toFixed(2)} MB
        </p>
        </>
     
      }
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          accept="audio/*, video/*"
          className="hidden"
          onChange={handleChange}
        />

      </label>

    
    </div>
  
<p className="text-[14px] font-medium text-center mt-4"> Supported Formats: .mp3, .mp4, .wav, .ogg</p>
    </section>
  )
}
