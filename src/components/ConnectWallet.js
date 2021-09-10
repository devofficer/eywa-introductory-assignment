import { Button, makeStyles } from '@material-ui/core';
import Dialog from './Dialog';
import { inject, observer } from 'mobx-react';
import TokenSelector from './TokenSelector';

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

const ConnectWallet = ({ tokens }) => {
  const classes = useStyles();

  return (
    <Dialog>
      <TokenSelector />
      <Button variant="contained" className={classes.button} color="primary">
        Connect Wallet
      </Button>
    </Dialog>
  );
};

export default inject("tokens")(observer(ConnectWallet));