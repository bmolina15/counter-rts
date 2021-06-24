import Counter from "../Counter";
import Actions from "../Actions";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"50px",
    border:"none",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize:"50px",
    boxShadow:"none"
  }
}));

function App() {
  const classes = useStyles();
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrese = () => {
    setNumber(number - 1);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Counter number={number} />
            <Actions handleIncrease={handleIncrease} handleDecrese={handleDecrese} />
          </Paper>
        </Grid>
      </Grid>

      
    </div>
  );
}

export default App;
