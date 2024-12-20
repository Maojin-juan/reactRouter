import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;
export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=cat`,
      );
      const { results } = response.data;
      console.log(results);
      setList(results);
    })();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        左側選單列表
        <p>
          <Link
            className="text-blue-500 underline focus:text-blue-700"
            to="search"
          >
            搜尋頁面
          </Link>
        </p>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="text-blue-500 underline focus:text-blue-700"
                to={item.id}
              >
                {item.id}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="col-span-8">
        <Outlet context={list} />
      </div>
    </div>
  );
}
