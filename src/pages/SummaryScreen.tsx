import React, { useState } from 'react';
import { useFeedback } from '@/contexts/FeedbackContext';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';
import { Card } from '@/components/Layout/Card';
import { Button } from '@/components/UI/Button';
import { NavigationButtons } from '@/components/UI/NavigationButtons';
import { TextArea } from '@/components/UI/TextArea';
import { RATING_OPTIONS } from '@/utils/constants';

export function SummaryScreen() {
  const { state, previousScreen, setLoading, setError, reset } = useFeedback();
  const [finalComment, setFinalComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getRatingLabel = (rating: number) => {
    return RATING_OPTIONS.find(option => option.value === rating)?.label || 'N/A';
  };

  const getRatingEmoji = (rating: number) => {
    return RATING_OPTIONS.find(option => option.value === rating)?.emoji || '❓';
  };

  const handleSubmit = async () => {
    if (!state.data.userInfo || !state.data.serviceRating || !state.data.foodRating || 
        !state.data.waitTimeRating || !state.data.spaceRating) {
      setError('Dados incompletos. Por favor, volte e preencha todas as informações.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const feedbackData = {
        userInfo: state.data.userInfo,
        serviceRating: state.data.serviceRating,
        foodRating: state.data.foodRating,
        waitTimeRating: state.data.waitTimeRating,
        spaceRating: state.data.spaceRating,
        finalComment: finalComment.trim(),
        timestamp: new Date().toISOString(),
      };

      await GoogleSheetsService.submitFeedback(feedbackData);
      setIsSubmitted(true);
    } catch (error) {
      setError('Erro ao enviar avaliação. Tente novamente.');
      console.error('Erro ao enviar feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    previousScreen();
  };

  const handleNewEvaluation = () => {
    reset();
    setIsSubmitted(false);
    setFinalComment('');
  };

  if (isSubmitted) {
    return (
      <Card>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
          <h1 style={{ color: '#333', marginBottom: '15px', fontSize: '24px' }}>
            Obrigado!
          </h1>
          <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
            Sua avaliação foi enviada com sucesso. 
            Ela ajudará o estabelecimento a melhorar seus serviços.
          </p>
          <Button onClick={handleNewEvaluation}>
            Nova Avaliação
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
          📋 Resumo da Avaliação
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Revise suas avaliações antes de enviar
        </p>
      </div>

      <div style={{ flex: 1, marginBottom: '20px' }}>
        {state.data.userInfo && (
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '16px' }}>Informações Básicas</h3>
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
              <strong>Sexo:</strong> {state.data.userInfo.gender}
            </p>
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
              <strong>Idade:</strong> {state.data.userInfo.age} anos
            </p>
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
              <strong>Horário:</strong> {state.data.userInfo.visitTime}
            </p>
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
              <strong>Prato:</strong> {state.data.userInfo.dish}
            </p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          {state.data.serviceRating && (
            <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '5px' }}>
                {getRatingEmoji(state.data.serviceRating.rating)}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Atendimento</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>
                {getRatingLabel(state.data.serviceRating.rating)}
              </div>
            </div>
          )}

          {state.data.foodRating && (
            <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '5px' }}>
                {getRatingEmoji(state.data.foodRating.rating)}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Comida</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>
                {getRatingLabel(state.data.foodRating.rating)}
              </div>
            </div>
          )}

          {state.data.waitTimeRating && (
            <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '5px' }}>
                {getRatingEmoji(state.data.waitTimeRating.rating)}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Tempo de Espera</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>
                {getRatingLabel(state.data.waitTimeRating.rating)}
              </div>
            </div>
          )}

          {state.data.spaceRating && (
            <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '5px' }}>
                {getRatingEmoji(Math.round((state.data.spaceRating.comfort + state.data.spaceRating.music + state.data.spaceRating.environment) / 3))}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Espaço</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>
                Média: {Math.round((state.data.spaceRating.comfort + state.data.spaceRating.music + state.data.spaceRating.environment) / 3)}/5
              </div>
            </div>
          )}
        </div>

        <TextArea
          label="Comentário final (opcional)"
          value={finalComment}
          onChange={setFinalComment}
          placeholder="Deixe um comentário geral sobre sua experiência..."
          rows={3}
        />

        {state.error && (
          <div style={{ 
            color: '#dc3545', 
            backgroundColor: '#f8d7da', 
            border: '1px solid #f5c6cb', 
            borderRadius: '8px', 
            padding: '10px', 
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            {state.error}
          </div>
        )}
      </div>

      <NavigationButtons
        onNext={handleSubmit}
        onBack={handleBack}
        nextDisabled={state.isLoading}
        nextText={state.isLoading ? 'Enviando...' : 'Enviar Avaliação'}
      />
    </Card>
  );
}
