import React, { useState } from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { WaitTimeRating } from '@/types';
import { RATING_OPTIONS } from '@/utils/constants';
import { Card } from '@/components/Layout/Card';
import { NavigationButtons } from '@/components/UI/NavigationButtons';
import { RatingSelector } from '@/components/UI/RatingSelector';
import { TextArea } from '@/components/UI/TextArea';

export function WaitTimeRatingScreen() {
  const { updateData, nextScreen, previousScreen } = useFeedback();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleNext = () => {
    if (rating !== null) {
      updateData({ 
        waitTimeRating: { rating, comment: comment.trim() || undefined } 
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
          ⏰ Tempo de Espera
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Como foi o tempo de espera para receber seu pedido?
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <RatingSelector
          options={RATING_OPTIONS}
          value={rating}
          onChange={setRating}
          label="Avalie o tempo de espera"
        />

        <TextArea
          label="Comentário sobre o tempo de espera (opcional)"
          value={comment}
          onChange={setComment}
          placeholder="Conte-nos mais sobre sua experiência com o tempo de espera..."
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
