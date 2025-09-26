export interface UserInfo {
  gender: 'masculino' | 'feminino' | 'outro';
  age: number;
  visitTime: string;
  dish: string;
}

export interface ServiceRating {
  rating: number;
  comment?: string;
}

export interface FoodRating {
  rating: number;
  comment?: string;
}

export interface WaitTimeRating {
  rating: number;
  comment?: string;
}

export interface SpaceRating {
  comfort: number;
  music: number;
  environment: number;
  comment?: string;
}

export interface FeedbackData {
  userInfo: UserInfo;
  serviceRating: ServiceRating;
  foodRating: FoodRating;
  waitTimeRating: WaitTimeRating;
  spaceRating: SpaceRating;
  finalComment: string;
  timestamp: string;
}

export interface RatingOption {
  value: number;
  label: string;
  emoji: string;
}

export type ScreenType = 
  | 'user-info'
  | 'service-rating'
  | 'food-rating'
  | 'wait-time-rating'
  | 'space-rating'
  | 'summary';

export interface NavigationStep {
  id: ScreenType;
  title: string;
  description: string;
  emoji: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export const NAVIGATION_STEPS: NavigationStep[] = [
  {
    id: 'user-info',
    title: 'Identificação',
    description: 'Informações básicas',
    emoji: '👤',
    isCompleted: false,
    isCurrent: true
  },
  {
    id: 'service-rating',
    title: 'Atendimento',
    description: 'Avalie o atendimento',
    emoji: '👥',
    isCompleted: false,
    isCurrent: false
  },
  {
    id: 'food-rating',
    title: 'Comida',
    description: 'Avalie a comida',
    emoji: '🍽️',
    isCompleted: false,
    isCurrent: false
  },
  {
    id: 'wait-time-rating',
    title: 'Tempo de Espera',
    description: 'Avalie o tempo de espera',
    emoji: '⏰',
    isCompleted: false,
    isCurrent: false
  },
  {
    id: 'space-rating',
    title: 'Espaço',
    description: 'Avalie o ambiente',
    emoji: '🏠',
    isCompleted: false,
    isCurrent: false
  },
  {
    id: 'summary',
    title: 'Resumo',
    description: 'Revise e envie',
    emoji: '📋',
    isCompleted: false,
    isCurrent: false
  }
];
