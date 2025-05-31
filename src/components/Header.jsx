
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="grid grid-cols-12 shadow-md p-3 px-7 items-center">

      <div className="flex items-center col-span-2">
        <RxHamburgerMenu className="text-xl" />
        <img
          className="h-6 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </div>


      <div className="col-span-8 flex justify-center">
        <div className="flex border border-gray-500 rounded-2xl overflow-hidden w-full max-w-md">
          <input
            type="text"
            className="px-3 py-1 outline-none w-full"
            placeholder="Search"
          />
          <button className="bg-gray-200 px-3">
            <IoSearch />
          </button>
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <HiUserCircle className="w-7 h-7" />
      </div>
    </div>
  );
};

export default Header;
