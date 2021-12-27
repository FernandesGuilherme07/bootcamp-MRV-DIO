import { Statefull } from "../components/Statefull";
import { Stateless } from "../components/Stateless";
import { Container } from "./styled";


function App() {
  return (
    <Container>
      <div>
        <Statefull/>
        <Stateless/>
      </div>
      
      
    </Container>
  );
}

export default App;
