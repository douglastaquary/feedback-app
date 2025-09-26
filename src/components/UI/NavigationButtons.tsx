import styled from 'styled-components';
import { useFeedback } from '@/contexts/FeedbackContext';
import { Button } from './Button';

interface NavigationButtonsProps {
  onNext?: () => void;
  onBack?: () => void;
  nextDisabled?: boolean;
  nextText?: string;
  backText?: string;
  showBack?: boolean;
  showNext?: boolean;
  className?: string;
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export function NavigationButtons({
  onNext,
  onBack,
  nextDisabled = false,
  nextText = 'Continuar',
  backText = 'Voltar',
  showBack = true,
  showNext = true,
  className
}: NavigationButtonsProps) {
  const { canGoPrevious, canGoNext } = useFeedback();

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <ButtonContainer className={className}>
      {showBack && canGoPrevious() && (
        <Button
          variant="secondary"
          onClick={handleBack}
        >
          {backText}
        </Button>
      )}
      {showNext && canGoNext() && (
        <Button
          onClick={handleNext}
          disabled={nextDisabled}
        >
          {nextText}
        </Button>
      )}
    </ButtonContainer>
  );
}
