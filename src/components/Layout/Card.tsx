import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
  }
`;

export function Card({ children, className }: CardProps) {
  return <StyledCard className={className}>{children}</StyledCard>;
}
