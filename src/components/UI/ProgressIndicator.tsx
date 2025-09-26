import styled from 'styled-components';
import { ScreenType, NAVIGATION_STEPS } from '@/types';

interface ProgressIndicatorProps {
  currentScreen: ScreenType;
  className?: string;
}

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 10px;
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 0 5px;
  }
`;

const Step = styled.div<{ isCompleted: boolean; isCurrent: boolean; isUpcoming: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  opacity: ${props => props.isUpcoming ? 0.5 : 1};
  transition: opacity 0.3s ease;
`;

const StepCircle = styled.div<{ isCompleted: boolean; isCurrent: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  
  background: ${props => {
    if (props.isCompleted) return 'linear-gradient(135deg, #28a745, #20c997)';
    if (props.isCurrent) return 'linear-gradient(135deg, #667eea, #764ba2)';
    return '#e9ecef';
  }};
  
  color: ${props => {
    if (props.isCompleted || props.isCurrent) return 'white';
    return '#6c757d';
  }};
  
  box-shadow: ${props => {
    if (props.isCompleted || props.isCurrent) return '0 4px 12px rgba(102, 126, 234, 0.3)';
    return 'none';
  }};
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;

const StepTitle = styled.div<{ isCompleted: boolean; isCurrent: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: ${props => {
    if (props.isCompleted) return '#28a745';
    if (props.isCurrent) return '#667eea';
    return '#6c757d';
  }};
  text-align: center;
  margin-bottom: 2px;
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const StepDescription = styled.div<{ isCompleted: boolean; isCurrent: boolean }>`
  font-size: 10px;
  color: ${props => {
    if (props.isCompleted) return '#28a745';
    if (props.isCurrent) return '#667eea';
    return '#adb5bd';
  }};
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ConnectorLine = styled.div<{ isCompleted: boolean }>`
  position: absolute;
  top: 20px;
  left: 50%;
  right: -50%;
  height: 2px;
  background: ${props => props.isCompleted ? 'linear-gradient(90deg, #28a745, #20c997)' : '#e9ecef'};
  z-index: -1;
  
  @media (max-width: 480px) {
    top: 17.5px;
  }
`;

export function ProgressIndicator({ currentScreen, className }: ProgressIndicatorProps) {
  const currentIndex = NAVIGATION_STEPS.findIndex(step => step.id === currentScreen);
  
  return (
    <ProgressContainer className={className}>
      {NAVIGATION_STEPS.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isUpcoming = index > currentIndex;
        
        return (
          <Step key={step.id} isCompleted={isCompleted} isCurrent={isCurrent} isUpcoming={isUpcoming}>
            <StepCircle isCompleted={isCompleted} isCurrent={isCurrent}>
              {isCompleted ? '✓' : step.emoji}
            </StepCircle>
            <StepTitle isCompleted={isCompleted} isCurrent={isCurrent}>
              {step.title}
            </StepTitle>
            <StepDescription isCompleted={isCompleted} isCurrent={isCurrent}>
              {step.description}
            </StepDescription>
            {index < NAVIGATION_STEPS.length - 1 && (
              <ConnectorLine isCompleted={isCompleted} />
            )}
          </Step>
        );
      })}
    </ProgressContainer>
  );
}
