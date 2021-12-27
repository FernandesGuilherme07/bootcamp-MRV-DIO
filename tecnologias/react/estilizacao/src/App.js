
import './App.css';
import { CssInJS } from './styled';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: 'red'}}>
        css inline
      </div>
      <div className="classes">
        css de classe
      </div>
      <CssInJS>
        css in JS(styledComponents)
      </CssInJS>
    </div>
  );
}

export default App;
