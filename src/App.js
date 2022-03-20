import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import './styles/style.css';
import userData from "./data.js";

function App() {
  let lastObjIndex = userData[userData.length - 1].id;

  const journey = userData.map(data => {
    if (data.id != lastObjIndex){
      return <Card key={data.id} data={data}/>
    } else{
      return <Card key={data.id} data={data} last={data.id + 1}/>
    }
  })

  return (
    <div>
      <Navbar />
      <section>
        {journey}
      </section>
    </div>
  );
}

export default App;
