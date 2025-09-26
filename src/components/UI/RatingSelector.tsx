import styled from 'styled-components';
import { RatingOption } from '@/types';

interface RatingSelectorProps {
  options: RatingOption[];
  value: number | null;
  onChange: (value: number) => void;
  label: string;
  className?: string;
}

const RatingContainer = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.h3`
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const OptionButton = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  border: 2px solid ${props => props.selected ? '#667eea' : '#e9ecef'};
  border-radius: 12px;
  background: ${props => props.selected ? '#f8f9ff' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 80px;

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
  }
`;

const Emoji = styled.span`
  font-size: 24px;
  margin-bottom: 8px;
`;

const OptionLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  line-height: 1.2;
`;

export function RatingSelector({
  options,
  value,
  onChange,
  label,
  className
}: RatingSelectorProps) {
  return (
    <RatingContainer className={className}>
      <Label>{label}</Label>
      <OptionsGrid>
        {options.map((option) => (
          <OptionButton
            key={option.value}
            selected={value === option.value}
            onClick={() => onChange(option.value)}
          >
            <Emoji>{option.emoji}</Emoji>
            <OptionLabel>{option.label}</OptionLabel>
          </OptionButton>
        ))}
      </OptionsGrid>
    </RatingContainer>
  );
}
