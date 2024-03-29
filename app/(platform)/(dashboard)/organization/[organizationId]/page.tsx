"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type organizationIdPageProps = {
    organizationId: string;
};

export type UploadResult = {
  info: {
    public_id: string;
  };
};

const OraganizationIdPage = () => {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hidden">
        <Button asChild>
          <CldUploadButton
            onSuccess={(results) => {
              const result = results as UploadResult;
              setImageId(result.info.public_id);
            }}
            uploadPreset="nvlyn0es"
          />
        </Button>

        {imageId && (
          <CldImage
            width="500"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>
    </main>
  );
};

export default OraganizationIdPage;
