"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  interface Window {
    cloudinary?: { cloudName: string };
  }
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  // Set Cloudinary cloudName on client
  useEffect(() => {
    if (typeof window !== "undefined" && !window.cloudinary) {
      window.cloudinary = {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
      };
    }
  }, []);

  const handleUpload = useCallback(
    (result: any) => {
      console.log("Upload result:", result);
      if (result?.info?.secure_url) {
        onChange(result.info.secure_url);
      }
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      options={{
        maxFiles: 1,
        clientAllowedFormats: ["png", "jpg", "jpeg", "webp"],
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>

          {value?.trim().startsWith("http") && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="Upload"
                fill
                style={{ objectFit: "cover" }}
                src={value.trim()}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
