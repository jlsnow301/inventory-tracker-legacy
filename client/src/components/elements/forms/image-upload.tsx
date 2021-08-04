import React, { useRef, useState, useEffect } from "react";

import Button from "./button";

import "../../../css/imageUpload.css";

interface Props {
  id: string;
  center?: string;
  errorText?: string;
  onInput: (id: string, pickedFile: File, fileIsValid: boolean) => void;
}

/** Image uploading for user profiles. */
const ImageUpload: React.FC<Props> = (props) => {
  const [file, setFile] = useState<Blob>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result) {
        setPreviewUrl(fileReader.result.toString());
      }
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event: React.FormEvent) => {
    let pickedFile;
    let fileIsValid = isValid;
    let target = event.target as HTMLInputElement;

    if (target?.files?.length === 1) {
      pickedFile = target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    if (pickedFile) {
      props.onInput(props.id, pickedFile, fileIsValid);
    }
  };

  const pickImageHandler = () => {
    if (filePickerRef && filePickerRef.current) {
      filePickerRef.current!.click();
    }
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
