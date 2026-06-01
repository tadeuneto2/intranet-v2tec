import React from 'react';
import { Container } from '@plone/components';
import type { Endereco } from 'volto-v2tec-intranet/types/endereco';

interface ContactInfoProps {
  content: Endereco;
}

const EnderecoInfo: React.FC<ContactInfoProps> = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;

  return (
    <Container narrow className="contato">
      <Container className="">
        <span className="label">Endereco</span>:{' '}
        <span className="value">{endereco}</span>
      </Container>
      <Container className="">
        <span className="label">Complemento</span>:{' '}
        <span className="value">{complemento}</span>
      </Container>
      <Container className="">
        <span className="label">Cidade</span>:{' '}
        <span className="value">{cidade}</span>
      </Container>
      <Container className="">
        <span className="label">Estado</span>:{' '}
        <span className="value">{estado}</span>
      </Container>
      <Container className="">
        <span className="label">CEP</span>: <span className="value">{cep}</span>
      </Container>
    </Container>
  );
};

export default EnderecoInfo;
