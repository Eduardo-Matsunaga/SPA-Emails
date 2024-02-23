/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Importa os componentes necessários do Chakra UI, React e outras dependências
import { Flex, VStack, Text, Heading, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Email {
  name: string;
  email: string;
  body: string;
}

// Componente VerticalCard responsável por exibir uma lista vertical de cartões
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function VerticalCard() {
  // Estado para armazenar a lista de emails
  const [emailList, setEmailList] = useState<Email[]>([]);

  // Estado para rastrear o índice que está sendo atualmente "hovered"
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Estado para rastrear o índice do cartão expandido
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Efeito colateral para buscar dados da API ao carregar o componente
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setEmailList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Manipulador de evento para quando o mouse entra em um cartão
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  // Manipulador de evento para quando o mouse sai de um cartão
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Manipulador de evento para quando um cartão é clicado
  const handleClick = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Flex>
      <VStack spacing="4">
        {emailList.map((email, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            marginTop={32}
            marginBottom={10}
            maxWidth={expandedIndex === index ? '700px' : '300px'}
            boxShadow={index === hoveredIndex ? 'xl' : 'md'}
            transition="box-shadow 0.3s, max-width 0.3s"
            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
            onClick={() => handleClick(index)}
            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            _hover={{ cursor: 'pointer' }}
          >
            <Heading size="md" marginBottom={1}>
              {email.name}
            </Heading>
            <Text fontWeight="bold" marginBottom={2}>
              {email.email}
            </Text>
            <Text>{email.body}</Text>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}
