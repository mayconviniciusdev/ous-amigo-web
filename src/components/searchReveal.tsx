import { SearchResult } from "@/types/searchResult";

type Props = {results: SearchResult};
export const SearchRevel = ({results}: Props) => {
  return (
    <div className="p-8">
      <p className="text-3xl">Olá, <span className="text-[#0E7178]">{results.person.name}!</span></p>
      <p className="text-xl">Seu Amigo Secreto é:</p>
      <p className="text-xl text-center bg-[#0E7178] rounded-[10px] mt-8 p-8">{results.personMatched.name}</p>
    </div>
  );
}