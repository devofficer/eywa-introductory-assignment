import { Button, makeStyles } from '@material-ui/core';
import Dialog from './Dialog';
import { inject, observer } from 'mobx-react';
import TokenSelector from './TokenSelector';
import Web3 from 'web3';

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

const ConnectWallet = ({ routing, tokens }) => {
  const classes = useStyles();
  const handleConnectWallet = async () => {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    window.web3.eth.getAccounts().then(accounts => {
      tokens.setAccount(accounts[0]);
      routing.push('/get-test-tokens');
    });
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