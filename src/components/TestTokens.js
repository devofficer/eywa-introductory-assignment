import { Button, Grid, makeStyles } from '@material-ui/core';
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
        <Grid item>
          <TokenSelector />
        </Grid>
        <Grid item className={classes.account}>
          {`${tokens.account.slice(0, 5)}.....${tokens.account.slice(-4)}`}
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