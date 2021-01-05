import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PageHeader from './components/header';
import TableFrame from './components/tableFrame';
import PageLog from './components/pageLog';

import StockAppStore from './store/powerAppStore';

function App() {
  return (
    <StockAppStore>
    <div className="container">
      <PageHeader></PageHeader>
      <TableFrame></TableFrame>
      <PageLog></PageLog>
    </div>
    </StockAppStore>
  );
}

export default App;
