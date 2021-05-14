// code responsavel por anexar uma tipagem aos tipos do express
// O que vai me permitir adicionar o id do user nas rotas
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
