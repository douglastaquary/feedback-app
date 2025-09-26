import styled from 'styled-components';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const SelectContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export function Select({
  options,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  className
}: SelectProps) {
  return (
    <SelectContainer className={className}>
      {label && <Label>{label} {required && '*'}</Label>}
      <StyledSelect
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
}
