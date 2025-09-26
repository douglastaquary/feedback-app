import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FeedbackData, ScreenType, NAVIGATION_STEPS } from '@/types';

interface FeedbackState {
  currentScreen: ScreenType;
  data: Partial<FeedbackData>;
  isLoading: boolean;
  error: string | null;
}

type FeedbackAction =
  | { type: 'SET_SCREEN'; payload: ScreenType }
  | { type: 'UPDATE_DATA'; payload: Partial<FeedbackData> }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };

const initialState: FeedbackState = {
  currentScreen: 'user-info',
  data: {},
  isLoading: false,
  error: null,
};

function feedbackReducer(state: FeedbackState, action: FeedbackAction): FeedbackState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'UPDATE_DATA':
      return { ...state, data: { ...state.data, ...action.payload } };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface FeedbackContextType {
  state: FeedbackState;
  setScreen: (screen: ScreenType) => void;
  nextScreen: () => void;
  previousScreen: () => void;
  goToScreen: (screen: ScreenType) => void;
  updateData: (data: Partial<FeedbackData>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
  getCurrentStep: () => number;
  getTotalSteps: () => number;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const setScreen = (screen: ScreenType) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
  };

  const nextScreen = () => {
    const currentIndex = NAVIGATION_STEPS.findIndex(step => step.id === state.currentScreen);
    if (currentIndex < NAVIGATION_STEPS.length - 1) {
      const nextScreen = NAVIGATION_STEPS[currentIndex + 1].id;
      dispatch({ type: 'SET_SCREEN', payload: nextScreen });
    }
  };

  const previousScreen = () => {
    const currentIndex = NAVIGATION_STEPS.findIndex(step => step.id === state.currentScreen);
    if (currentIndex > 0) {
      const previousScreen = NAVIGATION_STEPS[currentIndex - 1].id;
      dispatch({ type: 'SET_SCREEN', payload: previousScreen });
    }
  };

  const goToScreen = (screen: ScreenType) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
  };

  const updateData = (data: Partial<FeedbackData>) => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const getCurrentStep = () => {
    return NAVIGATION_STEPS.findIndex(step => step.id === state.currentScreen) + 1;
  };

  const getTotalSteps = () => {
    return NAVIGATION_STEPS.length;
  };

  const canGoNext = () => {
    const currentIndex = NAVIGATION_STEPS.findIndex(step => step.id === state.currentScreen);
    return currentIndex < NAVIGATION_STEPS.length - 1;
  };

  const canGoPrevious = () => {
    const currentIndex = NAVIGATION_STEPS.findIndex(step => step.id === state.currentScreen);
    return currentIndex > 0;
  };

  return (
    <FeedbackContext.Provider
      value={{
        state,
        setScreen,
        nextScreen,
        previousScreen,
        goToScreen,
        updateData,
        setLoading,
        setError,
        reset,
        getCurrentStep,
        getTotalSteps,
        canGoNext,
        canGoPrevious,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
}
