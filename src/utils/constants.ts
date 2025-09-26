import { RatingOption } from '@/types';

export const RATING_OPTIONS: RatingOption[] = [
  { value: 1, label: 'Muito Ruim', emoji: '😞' },
  { value: 2, label: 'Ruim', emoji: '😕' },
  { value: 3, label: 'Regular', emoji: '😐' },
  { value: 4, label: 'Bom', emoji: '😊' },
  { value: 5, label: 'Excelente', emoji: '🤩' },
];

export const GENDER_OPTIONS = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
  { value: 'outro', label: 'Outro' },
];

export const VISIT_TIME_OPTIONS = [
  { value: 'cafe-manha', label: 'Café da Manhã (6h-11h)' },
  { value: 'almoco', label: 'Almoço (11h-15h)' },
  { value: 'lanche', label: 'Lanche (15h-18h)' },
  { value: 'jantar', label: 'Jantar (18h-22h)' },
  { value: 'happy-hour', label: 'Happy Hour (17h-20h)' },
  { value: 'noite', label: 'Noite (20h-24h)' },
];

export const DISH_OPTIONS = [
  { value: 'prato-principal', label: 'Prato Principal' },
  { value: 'entrada', label: 'Entrada' },
  { value: 'sobremesa', label: 'Sobremesa' },
  { value: 'bebida', label: 'Bebida' },
  { value: 'lanche', label: 'Lanche' },
  { value: 'cafe', label: 'Café' },
  { value: 'outro', label: 'Outro' },
];

export const SCREEN_TITLES = {
  'user-info': 'Informações Básicas',
  'service-rating': 'Avaliação do Atendimento',
  'food-rating': 'Avaliação da Comida',
  'wait-time-rating': 'Avaliação do Tempo de Espera',
  'space-rating': 'Avaliação do Espaço',
  'summary': 'Resumo e Envio',
};
