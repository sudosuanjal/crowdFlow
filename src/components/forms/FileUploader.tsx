import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
};

const FileUploader = ({ filedChange }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      filedChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg", ".svg"] },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-primarylight rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img
              src={fileUrl}
              className="h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-center "
              alt="image"
            />
          </div>
          <p className="file_uploader-label">click or grag photo to replace</p>
        </>
      ) : (
        <div className="flex items-center flex-center flex-col p-7 h-80 lg:h-[300px]">
          <img
            src="/icons/upload.png"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h3 className="text-[16px] font-medium leading-[140%] text-light-2 mb-2 mt-6">
            Drag Photo Here
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
          <Button className="h-12 bg-dark-4 px-5 text-light-1 flex gap-2 !important">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
