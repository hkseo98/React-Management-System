import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
const axios = require('axios')


const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    overflowX: "auto",
    marginTop: 3,
  },
  table: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    minWidth: 1080,
  },
  font: {
    fontSize: 20,
    fontWeight: 700,
  }
});



function App() {
  let [customers, setCustomers] = useState(null);

  useEffect(() => {
   function a() {
     axios.get('http://localhost:5000/api/customers')
    .then((res) => setCustomers(res.data))
   }
    setTimeout(a, 1000)
  }
  , [])


  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead className={classes.table}>
          <TableRow>
            <TableCell className={classes.font}>번호</TableCell>
            <TableCell className={classes.font}>이미지</TableCell>
            <TableCell className={classes.font}>이름</TableCell>
            <TableCell className={classes.font}>생년월일</TableCell>
            <TableCell className={classes.font}>성별</TableCell>
            <TableCell className={classes.font}>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? customers.map(item => <Customer data={item}></Customer>
          ) : "loading.."}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
