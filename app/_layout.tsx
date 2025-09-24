import { Stack } from 'expo-router';
import '../global.css';

import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    if (colorScheme) setColorScheme(colorScheme);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false, // Hide header if you don't want it
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
