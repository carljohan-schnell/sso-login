import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-neutral-900">
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Text className="mb-6 text-2xl font-mono text-black dark:text-white">
        About Page
      </Text>

      <Pressable onPress={() => router.back()}>
        <Text className="text-blue-500 dark:text-blue-400">Go Back</Text>
      </Pressable>
    </View>
  );
}
