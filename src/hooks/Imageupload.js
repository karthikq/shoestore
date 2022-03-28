/** @format */

import app from "../database/firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

function Imageupload(file, setUrl) {
  file.map((item, index) => {
    const storage = getStorage(app);

    const storageRef = ref(storage, item.name);
    const uploadTask = uploadBytesResumable(storageRef, item);
    return uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100
        ).toFixed(2);
        console.log(progress);

        // perValue.innerHTML = progress + "%";
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        if (downloadURL) {
          setUrl((preValue) => [...preValue, downloadURL]);
        }
      }
    );
  });
}
export default Imageupload;
