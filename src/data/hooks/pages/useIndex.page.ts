import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(''),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscaProfissionais(cep: string) {
    setSearchDone(false);
    setLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);
      console.log(data);
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('CEP não encontrado');
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscaProfissionais,
    error,
    diaristas,
    searchDone,
    loading,
    diaristasRestantes,
  };
}
