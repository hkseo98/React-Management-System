import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    overflowX: "auto",
    marginTop: 3,
  },
  table: {
    minWidth: 1080,
  },
  font: {
    fontSize: 20,
    fontWeight: 700,
  }
});

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birth': '980519',
  'sex': '상남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '안현재',
  'birth': '980813',
  'sex': '상남자',
  'job': '개발자'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '서한결',
  'birth': '980519',
  'sex': '상남자',
  'job': '개발자'
},
]

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
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
          {customers.map(item => <Customer key={item.id} data={item}></Customer>)}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
