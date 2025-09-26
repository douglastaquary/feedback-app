import React, { useState } from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { FoodRating } from '@/types';
import { RATING_OPTIONS } from '@/utils/constants';
import { Card } from '@/components/Layout/Card';
import { NavigationButtons } from '@/components/UI/NavigationButtons';
import { RatingSelector } from '@/components/UI/RatingSelector';
import { TextArea } from '@/components/UI/TextArea';

export function FoodRatingScreen() {
  const { updateData, nextScreen, previousScreen } = useFeedback();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleNext = () => {
    if (rating !== null) {
      updateData({ 
        foodRating: { rating, comment: comment.trim() || undefined } 
      });
      nextScreen();
    }
  };

  const handleBack = () => {
    previousScreen();
  };

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
          🍽️ Comida
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Como foi a qualidade da comida?
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <RatingSelector
          options={RATING_OPTIONS}
          value={rating}
          onChange={setRating}
          label="Avalie a comida"
        />

        <TextArea
          label="Comentário sobre a comida (opcional)"
          value={comment}
          onChange={setComment}
          placeholder="Conte-nos mais sobre o sabor, apresentação, temperatura..."
          rows={3}
        />
      </div>

      <NavigationButtons
        onNext={handleNext}
        onBack={handleBack}
        nextDisabled={rating === null}
      />
    </Card>
  );
}
