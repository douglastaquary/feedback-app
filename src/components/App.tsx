import React from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { Container } from '@/components/Layout/Container';
import { ProgressIndicator } from '@/components/UI/ProgressIndicator';
import { UserInfoScreen } from '@/pages/UserInfoScreen';
import { ServiceRatingScreen } from '@/pages/ServiceRatingScreen';
import { FoodRatingScreen } from '@/pages/FoodRatingScreen';
import { WaitTimeRatingScreen } from '@/pages/WaitTimeRatingScreen';
import { SpaceRatingScreen } from '@/pages/SpaceRatingScreen';
import { SummaryScreen } from '@/pages/SummaryScreen';

export function App() {
  const { state } = useFeedback();

  const renderCurrentScreen = () => {
    switch (state.currentScreen) {
      case 'user-info':
        return <UserInfoScreen />;
      case 'service-rating':
        return <ServiceRatingScreen />;
      case 'food-rating':
        return <FoodRatingScreen />;
      case 'wait-time-rating':
        return <WaitTimeRatingScreen />;
      case 'space-rating':
        return <SpaceRatingScreen />;
      case 'summary':
        return <SummaryScreen />;
      default:
        return <UserInfoScreen />;
    }
  };

  return (
    <Container>
      <ProgressIndicator currentScreen={state.currentScreen} />
      {renderCurrentScreen()}
    </Container>
  );
}
