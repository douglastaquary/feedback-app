import styled from 'styled-components';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  required = false,
  min,
  max,
  className
}: InputProps) {
  return (
    <InputContainer className={className}>
      {label && <Label>{label} {required && '*'}</Label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={min}
        max={max}
      />
    </InputContainer>
  );
}
