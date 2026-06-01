import React from 'react';
import { Container } from '@plone/components';
import type { Endereco } from 'volto-v2tec-intranet/types/endereco';

interface ContactInfoProps {
  content: Endereco;
}

const EnderecoInfo: React.FC<ContactInfoProps> = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;

  return (
    <Container narrow>
      {cidade && estado && (
        <Container>
          <span className="label">Endereço</span>:{' '}
          <span className="cidade">{cep}</span> {' - '}
          <span className="cidade">{endereco}</span>{' '}
          <span className="cidade">{complemento}</span>{' '}
          <span className="cidade">{cidade}</span> {' / '}
          <span className="estado">{estado.token}</span>
        </Container>
      )}
    </Container>
  );
};

export default EnderecoInfo;
