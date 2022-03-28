/** @format */

import app from "../database/firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

function Imageupload(file) {
  const [url, setUrl] = useState("");
  const [upprogress, setupprogress] = useState("");

  const storage = getStorage(app);

  file.map((img, index) => {
    const storageRef = ref(storage, img.name);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
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
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setUrl((preValue) => [...preValue, downloadURL]);
          })
          .catch((err) => {
            throw err;
          });
      }
    );
  });
  console.log(url);
  return url;
}
export default Imageupload;
