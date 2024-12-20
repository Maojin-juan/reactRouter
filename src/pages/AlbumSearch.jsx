import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [search, setSearch] = useState("cat");
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=${search}`,
      );
      const { results } = response.data;
      console.log(results);
      setList(results);
    })();
  }, [search]);

  return (
    <>
      這是搜尋頁面{search}
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setSearch(e.target.value);
            console.log("sa");
          }
        }}
      />
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Link
              className="text-blue-500 underline focus:text-blue-700"
              to={`/album/${item.id}`}
            >
              {item.id}
            </Link>
          </li>
        );
      })}
    </>
  );
}
