// Importação das bibliotecas necessárias do React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importa o componente principal App

// Importa o ChakraProvider da biblioteca Chakra UI para estilização
import { ChakraProvider } from '@chakra-ui/react';

const rootElement = document.getElementById('root');

// Garante que o elemento raiz existe antes de tentar renderizar
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Elemento raiz com id "root" não encontrado no documento.');
}
