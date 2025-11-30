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
    <div className="rounded-2xl bg-[#0E7178] mt-10 p-8 m-8">
      <p className="mb-3 text-xl">Qual seu CPF?</p>

      <input 
      type="number" inputMode="numeric"
      className="w-full p-2 bg-white text-black text-center outline-none rounded-lg disabled:opacity-20"
      placeholder="Digite seu CPF"
      autoFocus
      value={cpfInput}
      onChange={e => setCpfInput(escapeCPF(e.target.value))}
      disabled={loading}/>

      <button 
      className="w-full cursor-pointer p-3 mt-3 bg-[#004369] text-white disabled:opacity-20"
      onClick={() => onSearchButton(cpfInput)}
      disabled={loading}>
        {loading ? 'Qual será seu amigo? 🧐': 'Acessar resultado!'}
      </button>
    </div>
  )
}