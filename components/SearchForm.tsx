"use client";
import { searchMovie } from "@/lib/movie";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(searchMovie, null);
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <input
        className="focus:outline-none peer block w-full rounded-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={'Search'}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchForm;
