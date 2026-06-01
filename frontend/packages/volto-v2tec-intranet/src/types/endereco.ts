import type { Content } from '@plone/types';

export interface Endereco extends Content {
  title: string;
  description: string;
  endereco?: string;
  complemento?: string;
  cidade?: string;
  estado?: {
    token: string;
    title?: string;
  };
  cep?: string;
}
