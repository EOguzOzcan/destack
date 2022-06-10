import logo from './logo.svg';
import './App.css';
import 'grapesjs/dist/css/grapes.min.css'
import { ContentProviderReact } from 'destack'


function App() {
  return (
    <div className="App">
      <span>Hello world</span>  
      <ContentProviderReact />
    </div>
  );
}

export default App;
