import { action } from 'mobx';

const TokenAction = tokens => ({
  setCurrentToken: action((token) => {
    tokens.currentToken = token;
  }),
  setAccount: action(account => {
    tokens.account = account;
  }),
  setEYWABalance: action(bal => {
    tokens.EYWABalance = bal;
  }),
  setUSDTBalance: action(bal => {
    tokens.USDTBalance = bal;
  }),
});

export default TokenAction; 