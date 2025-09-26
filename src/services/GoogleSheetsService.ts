import { FeedbackData } from '@/types';

export class GoogleSheetsService {
  private static readonly SCRIPT_URL = process.env.VITE_GOOGLE_SCRIPT_URL || '';

  static async submitFeedback(data: FeedbackData): Promise<void> {
    try {
      const response = await fetch(this.SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            timestamp: data.timestamp,
            gender: data.userInfo.gender,
            age: data.userInfo.age,
            visitTime: data.userInfo.visitTime,
            dish: data.userInfo.dish,
            serviceRating: data.serviceRating.rating,
            serviceComment: data.serviceRating.comment || '',
            foodRating: data.foodRating.rating,
            foodComment: data.foodRating.comment || '',
            waitTimeRating: data.waitTimeRating.rating,
            waitTimeComment: data.waitTimeRating.comment || '',
            comfortRating: data.spaceRating.comfort,
            musicRating: data.spaceRating.music,
            environmentRating: data.spaceRating.environment,
            spaceComment: data.spaceRating.comment || '',
            finalComment: data.finalComment,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar feedback');
      }

      const result = await response.json();
      console.log('Feedback enviado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      throw error;
    }
  }

  static formatDataForSheets(data: FeedbackData): any {
    return {
      timestamp: data.timestamp,
      gender: data.userInfo.gender,
      age: data.userInfo.age,
      visitTime: data.userInfo.visitTime,
      dish: data.userInfo.dish,
      serviceRating: data.serviceRating.rating,
      serviceComment: data.serviceRating.comment || '',
      foodRating: data.foodRating.rating,
      foodComment: data.foodRating.comment || '',
      waitTimeRating: data.waitTimeRating.rating,
      waitTimeComment: data.waitTimeRating.comment || '',
      comfortRating: data.spaceRating.comfort,
      musicRating: data.spaceRating.music,
      environmentRating: data.spaceRating.environment,
      spaceComment: data.spaceRating.comment || '',
      finalComment: data.finalComment,
    };
  }
}
