import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from '~/components/EndedQuestion';
import HeaderComponent from '~/components/HeaderComponent';
import { QuizQuestion } from '~/types';
import { beginnerQuestions, intermediateQuestions, advancedQuestions } from '~/assets/data/AllQuestionsData';

const backgroundImage = require('/mnt/data/360_F_754021129_DJgd3BC7ogRVTC5mYbl1YjKZMAHczuFG.jpg');

export default function GameScreen() {
  const { level } = useLocalSearchParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [lives, setLives] = useState(5);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    const selected = getQuestionsByLevel(level as string);
    setQuestions(selected);
    setCurrentQuestion(selected[0]);
  }, [level]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs baigėte!', 'Puikus darbas!');
      setCurrentQuestionIndex(0);
      return;
    }
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const getQuestionsByLevel = (level: string) => {
    switch (level) {
      case 'beginner': return beginnerQuestions;
      case 'intermediate': return intermediateQuestions;
      case 'advanced': return advancedQuestions;
      default: return beginnerQuestions;
    }
  };

  const onCorrectAnswer = () => setCurrentQuestionIndex((i) => i + 1);

  const onWrongAnswer = () => {
    if (lives <= 1) {
      Alert.alert('Pralaimėjote', 'Bandykite dar kartą', [{ text: 'OK', onPress: restart }]);
    } else {
      setLives((l) => l - 1);
    }
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }} resizeMode="cover">
      <SafeAreaView className="flex flex-1 p-3 bg-transparent">
        <StatusBar animated barStyle="light-content" />
        <HeaderComponent progress={currentQuestionIndex / questions.length} lives={lives} />

        {currentQuestion?.type === 'MULTIPLE_CHOICE' && (
          <MultipleChoiceQuestion
            question={{
              question: currentQuestion.text,
              options: currentQuestion.options || [],
            }}
            onCorrectAnswer={onCorrectAnswer}
            onWrongAnswer={onWrongAnswer}
          />
        )}
        {currentQuestion?.type === 'OPEN_ENDED' && (
          <EndedQuestion
            question={currentQuestion}
            onCorrectAnswer={onCorrectAnswer}
            onWrongAnswer={onWrongAnswer}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}
