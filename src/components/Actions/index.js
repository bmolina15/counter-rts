import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));

const Actions = (props) =>{
    const classes = useStyles();

return(
<div className={classes.root}> 
    <Button onClick={props.handleDecrese} color="secondary" variant="contained" size="large"> Restar</Button>
    <Button onClick={props.handleIncrease} color="primary" variant="contained" size="large"> Sumar</Button>
</div>
)

}
export default Actions