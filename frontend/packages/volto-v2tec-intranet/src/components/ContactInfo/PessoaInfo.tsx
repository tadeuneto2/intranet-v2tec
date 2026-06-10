import React from 'react';
import { Container } from '@plone/components';
import EnderecoInfo from './Endereco';
import type { Pessoa } from 'volto-v2tec-intranet/types/pessoa';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import AreaInfo from '../AreaInfo/AreaInfo';

interface PessoaInfoProps {
  content: Pessoa;
}

const PessoaInfo: React.FC<PessoaInfoProps> = ({ content }) => {
  const { telefone, email } = content;

  return (
    <Container narrow className="contato">
      <Container className="telefone">
        <span className="label">Telefone</span>:{' '}
        <span className="value">{telefone}</span>
      </Container>
      <Container className="email">
        <span className="label">E-mail</span>:{' '}
        <span className="value">
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </Container>

      {content?.area && (
        <Container className="area">
          <UniversalLink href={content?.area['@id']}>
            <AreaInfo content={content} />
          </UniversalLink>
        </Container>
      )}

      <EnderecoInfo content={content} />
    </Container>
  );
};

export default PessoaInfo;
