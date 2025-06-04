import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 shadow-md p-3 px-7 items-center">
      <div className="flex items-center cursor-pointer col-span-2">
        <RxHamburgerMenu
          className="text-xl hover:bg-gray-100"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-6 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </div>

      <div className="col-span-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="flex border border-gray-500 rounded-2xl overflow-hidden w-full max-w-md">
            <input
              type="text"
              className="px-3 py-1 outline-none w-full"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gray-200 px-3">
              <IoSearch />
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="absolute top-full  left-0 w-full bg-white  border py-2 px-4 border-gray-300 rounded-md mt-1 shadow-lg z-50">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    <IoSearch className="text-gray-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <HiUserCircle className="w-7 h-7" />
      </div>
    </div>
  );
};

export default Header;
