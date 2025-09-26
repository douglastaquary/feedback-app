import React, { useState } from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { SpaceRating } from '@/types';
import { RATING_OPTIONS } from '@/utils/constants';
import { Card } from '@/components/Layout/Card';
import { NavigationButtons } from '@/components/UI/NavigationButtons';
import { RatingSelector } from '@/components/UI/RatingSelector';
import { TextArea } from '@/components/UI/TextArea';

export function SpaceRatingScreen() {
  const { updateData, nextScreen, previousScreen } = useFeedback();
  const [comfort, setComfort] = useState<number | null>(null);
  const [music, setMusic] = useState<number | null>(null);
  const [environment, setEnvironment] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleNext = () => {
    if (comfort !== null && music !== null && environment !== null) {
      updateData({ 
        spaceRating: { 
          comfort, 
          music, 
          environment, 
          comment: comment.trim() || undefined 
        } 
      });
      nextScreen();
    }
  };

  const handleBack = () => {
    previousScreen();
  };

  const isFormValid = comfort !== null && music !== null && environment !== null;

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
          🏠 Espaço
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Como foi o ambiente do estabelecimento?
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <RatingSelector
          options={RATING_OPTIONS}
          value={comfort}
          onChange={setComfort}
          label="Conforto"
        />

        <RatingSelector
          options={RATING_OPTIONS}
          value={music}
          onChange={setMusic}
          label="Música"
        />

        <RatingSelector
          options={RATING_OPTIONS}
          value={environment}
          onChange={setEnvironment}
          label="Ambiente geral"
        />

        <TextArea
          label="Comentário sobre o espaço (opcional)"
          value={comment}
          onChange={setComment}
          placeholder="Conte-nos mais sobre o ambiente, decoração, limpeza..."
          rows={3}
        />
      </div>

      <NavigationButtons
        onNext={handleNext}
        onBack={handleBack}
        nextDisabled={!isFormValid}
      />
    </Card>
  );
}
