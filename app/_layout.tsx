import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo'

import { Stack } from 'expo-router';

const clerkApiKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkApiKey) {
  throw new Error('clerk api raktas nerastas');
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkApiKey}>
      <Stack>
      <Stack.Screen name='index' options ={{ headerShown: false}} />
      <Stack.Screen name='GameScreen' options ={{ headerShown: false}} />
      <Stack.Screen name='MainScreen' options ={{ headerShown: false}} />
    </Stack>
    </ClerkProvider>
    
  );
}
