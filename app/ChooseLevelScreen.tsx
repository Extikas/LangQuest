import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function ChooseLevelScreen() {
  const goToGame = (level: 'beginner' | 'intermediate' | 'advanced') => {
    router.push(`/GameScreen?level=${level}`);
  };

  return (
    <View className="flex-1 items-center justify-center bg-green-100 p-6">
      <Text className="text-2xl font-bold mb-8">Pasirinkite lygį</Text>

      <Pressable
        className="mb-4 w-64 rounded-lg bg-green-500 p-4 shadow-md"
        onPress={() => goToGame('beginner')}
      >
        <Text className="text-center text-lg font-semibold text-white">🟢 Pradedantysis</Text>
      </Pressable>

      <Pressable
        className="mb-4 w-64 rounded-lg bg-yellow-500 p-4 shadow-md"
        onPress={() => goToGame('intermediate')}
      >
        <Text className="text-center text-lg font-semibold text-white">🟡 Pažengęs</Text>
      </Pressable>

      <Pressable
        className="mb-4 w-64 rounded-lg bg-blue-500 p-4 shadow-md"
        onPress={() => goToGame('advanced')}
      >
        <Text className="text-center text-lg font-semibold text-white">🔵 Ekspertas</Text>
      </Pressable>
    </View>
  );
}
