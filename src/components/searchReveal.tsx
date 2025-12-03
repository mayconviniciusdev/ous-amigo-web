import { SearchResult } from "@/types/searchResult";

type Props = {results: SearchResult};
export const SearchRevel = ({results}: Props) => {
  return (
    <div className="bg-zinc-400 rounded-t-4xl shadow-[0_-6px_10px_-2px_#0E717866]">
      <div className="p-8 text-[#F6F6F6]">
        <p className="text-2xl">Olá, <span className="text-[#0E7178] font-semibold">{results.person.name}!</span></p>
        <p className="text-lg">Seu Amigo Secreto é:</p>
        <p className="text-xl bg-linear-to-r from-[#004369] from-10% to-[#1e1e1e] to-90% bg-clip-text text-transparent font-semibold rounded-[10px] mt-5">{results.personMatched.name}</p>
      </div>
    </div>
  );
}