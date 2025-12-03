"use client"

import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type Props = {
  onSearchButton: (cpf: string) => void;
  loading: boolean;
}

export const SearchForm = ({onSearchButton, loading}: Props) => {
  const [cpfInput, setCpfInput] = useState('');
  
  return (
    <div className="rounded-t-4xl bg-zinc-400 shadow-[0_-6px_10px_-2px_#0E717866] p-8">
      <p className="mb-3 text-lg text-[#F6F6F6]">Qual seu CPF?</p>

      <input 
      type="number" inputMode="numeric"
      className="w-full p-2 bg-[#F6F6F6] text-[#1E1E1E] text-center outline-none rounded-lg disabled:opacity-20"
      placeholder="Digite seu CPF"
      autoFocus
      value={cpfInput}
      onChange={e => setCpfInput(escapeCPF(e.target.value))}
      disabled={loading}/>

      <button 
      className="w-full cursor-pointer p-3 mt-2 bg-[#F6F6F6] text-[#0E7178] shadow-[6px_6px_10px_-2px_#004369] disabled:opacity-50 font-bold"
      onClick={() => onSearchButton(cpfInput)}
      disabled={loading}>
        {loading ? 'Qual será seu amigo? 🧐': 'Acessar resultado!'}
      </button>
    </div>
  )
}