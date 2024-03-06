"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounceCallback } from "usehooks-ts";
import InputField from "../inputField";
import "./styles.scss";

function Navbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();
  const handleSearch = useDebounceCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="nav-bar">
      <div className="nav-bar-inner">
        <h1>Hubble</h1>
        <div className="search-wrapper">
          <InputField
            placeholder="Search movies..."
            onChange={handleSearch}
            type="text"
            defaultValue={searchParams.get("search")?.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
