// Importa os componentes necessários do Chakra UI e do React
import { NavLink } from 'react-router-dom';
import * as CH from '@chakra-ui/react';
import React from 'react';

// Função principal do componente Navbar
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function navbar() {
  // Função para rolar até o topo da página com efeito suave
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div style={{ paddingTop: '32px' }}>
      <CH.Flex flexDirection="column">
        <CH.Flex
          height={32}
          width="100%"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
          position="fixed"
          top={0}
          zIndex={9999}
          backgroundColor="#f0f0f0"
        >
          <CH.Link
            fontSize={20}
            as={NavLink}
            to="/"
            onClick={scrollToTop}
            _activeLink={{ textDecoration: 'none' }}
          >
            Home
          </CH.Link>
        </CH.Flex>
      </CH.Flex>
    </div>
  );
}

export default navbar;
