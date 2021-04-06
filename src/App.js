import './App.css';
import Customer from './components/Customer';

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
  return (
    <div className="gray-background">
      {customers.map(item => <Customer key={item.id} data={item}></Customer>)}
    </div>
  );
}

export default App;
