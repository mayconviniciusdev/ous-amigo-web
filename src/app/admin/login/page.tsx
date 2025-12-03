"use client"

import { Button } from "@/components/admin/button";
import { InputField } from "@/components/admin/inputField";
import { useState } from "react";
import * as api from '@/api/admin';
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [passwordInput, setPasswordInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');

  const handleLoginButton = async () => {
    
    if(passwordInput) {
      setWarning('');
      setLoading(true);

      const token = await api.login(passwordInput);
      setLoading(false);

      if(!token) {setWarning('Você está com o acesso negado')}
      else {
        setCookie('token', token);
        router.push('/admin')
      }
    }
  }

  return (
    <div className="text-center py-4">
      <p className="text-lg">Qual a senha?</p>
      <InputField
      type="password"
      value={passwordInput}
      onChange={e => setPasswordInput(e.target.value)}
      placeholder="Digite a senha"
      disabled={loading}/>
      <Button
      value={loading ? 'CARREGANDO...' : 'ENTRAR'}
      onClick={handleLoginButton}
      disabled={loading}/>
      {warning && <div className="border border-dashed border-gray-100 p-3">{warning}</div>}

    </div>
  )
}

export default Page;