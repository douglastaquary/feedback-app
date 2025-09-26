import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Container({ children, className }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}
