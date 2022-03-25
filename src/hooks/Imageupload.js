/** @format */

import app from "../database/firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function Imageupload(file, perValue, cb) {
  const storage = getStorage(app);
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (
        (snapshot.bytesTransferred / snapshot.totalBytes) *
        100
      ).toFixed(2);

      perValue.innerHTML = progress + "%";
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          cb(downloadURL);
        })
        .catch((err) => {
          throw err;
        });
    }
  );
}
export default Imageupload;
