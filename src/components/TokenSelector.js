import { Box, makeStyles, MenuItem, Select } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const useStyles = makeStyles({
  root: {
    height: 32,
    color: '#fff',
    backgroundColor: 'transparent',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-selectMenu': {
      fontSize: 14,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'unset',
    },
    '& .MuiSelect-icon': {
      color: 'white',
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    fontWeight: 500,
  },
  img: {
    width: 32,
    height: 32,
  },
});

const TokenSelector = ({ tokens }) => {
  const classes = useStyles();

  return (
    <Select
      variant="outlined"
      displayEmpty
      className={classes.root}
      value={tokens.currentToken}
      onChange={e => tokens.setCurrentToken(e.target.value)}
    >
      <MenuItem value="" disabled>
        Select Token
      </MenuItem>
      {tokens.collection.map(({ label }) => (
        <MenuItem key={label} value={label}>
          <Box className={classes.menuItem}>
            <img src={`./assets/img/${label}.svg`} className={classes.img} alt={label} />
            <Box ml={1}>{label}</Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};

export default inject("tokens")(observer(TokenSelector));