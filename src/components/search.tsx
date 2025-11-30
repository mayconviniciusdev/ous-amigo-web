"use client"

import { SearchResult } from "@/types/searchResult";
import { useState } from "react";
import { SearchForm } from "./searchForm";
import * as api from '@/api/web'
import { SearchRevel } from "./searchReveal";

type Props = {id: number}
export const Search = ({id}: Props) => {
  const [results, setResults] = useState<SearchResult>();
  const [loading, setLoading] = useState(false);

  const handleSearchButton = async (cpf: string) => {
    if(!cpf) return;
    setLoading(true)

    const result = await api.searchCPF(id, cpf);
    setLoading(false)
    if(!result) return alert('descupla ')

    setResults(result)
  }

  return (
    <section className="border-t-2 border-[#004369]">
      {!results && <SearchForm onSearchButton={handleSearchButton} loading={loading}/>}
      {results && <SearchRevel results={results}/>}
    </section>
  );
};