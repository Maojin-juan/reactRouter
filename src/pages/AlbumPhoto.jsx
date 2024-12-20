import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accessId}`);
      setPhoto(response.data);
    })();
  }, [id]);

  return (
    <>
      這是單張圖片 {id}
      <p>{photo.description}</p>
      <img className="h-auto max-w-full" src={photo?.urls?.regular} alt="" />
    </>
  );
}
