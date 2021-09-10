import { action } from 'mobx';

const TokenAction = tokens => ({
  setCurrentToken: action((token) => {
    tokens.currentToken = token;
  }),
});

export default TokenAction; 