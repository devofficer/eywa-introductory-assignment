import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: '576px',
    background: '#191332',
    borderRadius: '8px',
    padding: '20px 24px 24px 24px',
    marginTop: '112px',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    marginBottom: 19,
  },
  content: {
    padding: '12px 16px',
    background: '#191332',
    border: '1px solid #29294D',
    boxSizing: 'border-box',
    borderRadius: 8,
  },
  label: {
    color: '#959EBD',
  },
});

const Dialog = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        FAUCET
      </div>
      <div className={classes.content}>
        <div className={classes.label}>Ethereum Rinkeby</div>
        <Box display="flex" alignItems="center" justifyContent="space-between" pt="23px" pb="24px">
          {children}
        </Box>
      </div>
    </div>
  );
};

export default Dialog;