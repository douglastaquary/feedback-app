import styled from 'styled-components';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
}

const TextAreaContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
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
    min-height: 80px;
  }
`;

export function TextArea({
  value,
  onChange,
  label,
  placeholder,
  rows = 4,
  required = false,
  className
}: TextAreaProps) {
  return (
    <TextAreaContainer className={className}>
      {label && <Label>{label} {required && '*'}</Label>}
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    </TextAreaContainer>
  );
}
