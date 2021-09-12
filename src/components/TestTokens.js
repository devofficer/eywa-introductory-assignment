import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import Dialog from './Dialog';
import { inject, observer } from 'mobx-react';
import TokenSelector from './TokenSelector';
import { useCallback, useEffect } from 'react';
import { EYWA_ADDR, USDT_ADDR } from '../utils/constants';
import balanceAbi from '../abis/balance-abi';

const useStyles = makeStyles({
  root: {
    color: '#959EBD',
  },
  button: {
    height: 56,
    width: '100%',
    color: 'white',
    backgroundColor: '#0CCFAC',
    '&:hover': {
      backgroundColor: '#0ACCA9',
    },
  },
  account: {

  },
  token: {
    textAlign: 'right',
    color: '#959EBD',
    fontSize: 14,
  },
  closeButton: {
    margin: -12,
  }
});

const TestTokens = ({ routing, tokens }) => {
  const classes = useStyles();

  const getTestTokens = useCallback(() => {
    const tokenInstOfUSDT = new window.web3.eth.Contract(balanceAbi, USDT_ADDR);
    tokenInstOfUSDT.methods.balanceOf(tokens.account).call().then((bal) => {
      tokens.setUSDTBalance(bal);
    });
    const tokenInstOfEYWA = new window.web3.eth.Contract(balanceAbi, EYWA_ADDR);
    tokenInstOfEYWA.methods.balanceOf(tokens.account).call().then((bal) => {
      tokens.setEYWABalance(bal);
    });
  }, [tokens]);

  const handleDisconnet = async () => {
    await window.web3Modal.clearCachedProvider();
    routing.push('/connect-wallet');
    tokens.setAccount(null);
  };

  useEffect(() => {
    if (!tokens.account) {
      routing.push('/connect-wallet');
      return;
    }

    getTestTokens();
  }, [tokens, routing, getTestTokens]);

  return (
    <Dialog>
      <Grid container justifyContent="space-between" spacing={2} className={classes.root}>
        <Grid item xs={8}>
          <TokenSelector />
        </Grid>
        <Grid container item xs={4} className={classes.account} alignItems="center" justifyContent="space-between">
          <img src="./assets/img/metamask.svg" alt="meta mask" />
          <Typography>
            {`${tokens.account.slice(0, 5)}.....${tokens.account.slice(-4)}`}
          </Typography>
          <IconButton className={classes.closeButton} onClick={handleDisconnet}>
            <img src="./assets/img/close.svg" alt="close mask" />
          </IconButton>
        </Grid>
        <Grid item xs={12} className={classes.token}>
          EYWA balance: {tokens.EYWABalance}; USDT balance: {tokens.USDTBalance}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className={classes.button} onClick={getTestTokens}>
            Get Test Tokens
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default inject("routing", "tokens")(observer(TestTokens));