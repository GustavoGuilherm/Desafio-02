import { ChakraProvider } from '@chakra-ui/react'
import { Header } from "./components/Header/Header";
import { CardPrincipal } from './components/CardPrincipal';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <CardPrincipal></CardPrincipal>
    </ChakraProvider>
  );
}

export default App;
