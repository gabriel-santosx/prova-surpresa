import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

         <Link to={'./acai'}> Acai </Link>
         <Link to={'./sorvete'}> Sorvete </Link>
         <Link to={'./libra'}> Libra </Link>
         <Link to={'/paradas'}> Paradas </Link>
         <Link to={'/salario'}> Salario </Link>
         <Link to={'/febre'}> Febre </Link>

    </div>
  );
}

export default App;