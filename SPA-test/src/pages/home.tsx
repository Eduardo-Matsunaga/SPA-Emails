// Importa os componentes necessários do Chakra UI e do React
import { Center } from '@chakra-ui/react';
import { VerticalCard } from '../components/VerticalCard';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function home() {
  return (
    <Center>
      <VerticalCard />
    </Center>
  );
}

export default home;
