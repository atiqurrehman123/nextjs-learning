"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="searcg"
        id="search"
        value={search}
        className="p-2 bg-white w-80 text-xl rounded-xl"
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}