import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="http://rb.gy/ulxxee"
          className="cursor-pointer object-contain"
          width={100}
          height={100}
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link href="/account">
          <img
            src="http://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
