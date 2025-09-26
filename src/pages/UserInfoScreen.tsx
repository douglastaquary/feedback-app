import { useState } from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { UserInfo } from '@/types';
import { GENDER_OPTIONS, VISIT_TIME_OPTIONS, DISH_OPTIONS } from '@/utils/constants';
import { Card } from '@/components/Layout/Card';
import { NavigationButtons } from '@/components/UI/NavigationButtons';
import { Select } from '@/components/UI/Select';
import { Input } from '@/components/UI/Input';

export function UserInfoScreen() {
  const { updateData, nextScreen } = useFeedback();
  const [formData, setFormData] = useState<Partial<UserInfo>>({
    gender: '' as any,
    age: 0,
    visitTime: '',
    dish: '',
  });

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'age' ? parseInt(value) || 0 : value
    }));
  };

  const handleNext = () => {
    if (formData.gender && formData.age && formData.visitTime && formData.dish) {
      updateData({ userInfo: formData as UserInfo });
      nextScreen();
    }
  };

  const isFormValid = formData.gender && formData.age && formData.visitTime && formData.dish;

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
          🍽️ Avaliação do Estabelecimento
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Vamos começar com algumas informações básicas
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <Select
          label="Sexo"
          options={GENDER_OPTIONS}
          value={formData.gender || ''}
          onChange={(value) => handleInputChange('gender', value)}
          placeholder="Selecione seu sexo"
          required
        />

        <Input
          type="number"
          label="Idade"
          value={formData.age || 0}
          onChange={(value) => handleInputChange('age', value)}
          placeholder="Digite sua idade"
          min={1}
          max={120}
          required
        />

        <Select
          label="Horário da visita"
          options={VISIT_TIME_OPTIONS}
          value={formData.visitTime || ''}
          onChange={(value) => handleInputChange('visitTime', value)}
          placeholder="Selecione o horário"
          required
        />

        <Select
          label="Prato consumido"
          options={DISH_OPTIONS}
          value={formData.dish || ''}
          onChange={(value) => handleInputChange('dish', value)}
          placeholder="Selecione o prato"
          required
        />
      </div>

      <NavigationButtons
        onNext={handleNext}
        nextDisabled={!isFormValid}
        showBack={false}
      />
    </Card>
  );
}
