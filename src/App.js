import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PageHeader from './components/header';
import TableFrame from './components/tableFrame';
import PageLog from './components/pageLog';



function App() {
  return (
    
    <div className="container">
      <PageHeader></PageHeader>
      <TableFrame></TableFrame>
      <PageLog></PageLog>
    </div>
    
  );
}

export default App;
