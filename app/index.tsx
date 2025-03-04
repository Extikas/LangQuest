import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import questions from '~/assets/data/AllQuestionsData';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from '~/components/EndedQuestion';
import { QuizQuestion } from '~/types';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = () => {
    Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
  };

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle={'default'} />
      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={{
            question: currentQuestion.text,
            options: currentQuestion.options || [],
          }}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
      {currentQuestion.type === 'OPEN_ENDED' && (
        <EndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
    </SafeAreaView>
  );
}
