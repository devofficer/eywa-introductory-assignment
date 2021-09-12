import { Button, makeStyles } from '@material-ui/core';
import Dialog from './Dialog';
import { inject, observer } from 'mobx-react';
import TokenSelector from './TokenSelector';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

const useStyles = makeStyles({
  button: {
    height: 56,
    width: 192,
    backgroundColor: '#0CCFAC',
    '&:hover': {
      backgroundColor: '#0ACCA9',
    },
  },
});

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
});

const ConnectWallet = ({ routing, tokens }) => {
  const classes = useStyles();
  const handleConnectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    tokens.setAccount(accounts?.[0]);
    window.web3 = web3;
    window.web3Modal = web3Modal;
    window.web3Provider = provider;
    routing.push('/get-test-tokens');
  };

  return (
    <Dialog>
      <TokenSelector />
      <Button variant="contained" className={classes.button} color="primary" onClick={handleConnectWallet}>
        Connect Wallet
      </Button>
    </Dialog>
  );
};

export default inject("routing", "tokens")(observer(ConnectWallet));