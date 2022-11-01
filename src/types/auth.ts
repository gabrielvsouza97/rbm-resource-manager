export type LoginResponse = {
  codigo: string;
  mensagem: string;
  detalhes: string;
  versao: string;
  retorno: {
    jwt: string;
    data_expira: string;
    dashboard: {
      login: string;
      nome: string;
      email: string;
      status: {
        codigo: number;
        descricao: string;
      };
      nivel: {
        codigo: number;
        descricao: string;
      };
    };
  };
};
