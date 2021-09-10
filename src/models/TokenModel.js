const TokenModel = (data = {}) => ({
  collection: [
    {
      label: 'USDT',
    },
    {
      label: 'EYWA'
    }
  ],
  currentToken: '',
  account: '',
  EYWABalance: 0,
  USDTBalance: 0,
});

export default TokenModel;