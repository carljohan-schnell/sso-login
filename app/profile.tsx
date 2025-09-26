import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleToggleTheme = () => {
    toggleColorScheme();
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-neutral-900">
      {/* <StatusBar style={isDarkMode ? 'light' : 'dark'} /> */}

      <View className="flex-1 items-center justify-center p-6">
        {/* Profile Header */}
        <View className="w-24 h-24 rounded-full bg-blue-500 dark:bg-blue-400 items-center justify-center mb-4">
          <Text className="text-2xl font-bold text-white">JD</Text>
        </View>

        <Text className="text-2xl font-bold text-black dark:text-white mb-2">
          John Doe
        </Text>

        <Text className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          Software Developer passionate about React Native and dark mode UX
        </Text>

        {/* Profile Stats */}
        <View className="w-full max-w-sm bg-gray-100 dark:bg-neutral-800 rounded-lg p-4 mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-700 dark:text-gray-300">Theme</Text>
            <Text className="font-mono font-bold capitalize text-black dark:text-white">
              {colorScheme} mode
            </Text>
          </View>

          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-700 dark:text-gray-300">Projects</Text>
            <Text className="font-bold text-black dark:text-white">12</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-gray-700 dark:text-gray-300">Experience</Text>
            <Text className="font-bold text-black dark:text-white">
              5 years
            </Text>
          </View>
        </View>

        {/* Actions */}
        <Pressable
          onPress={handleToggleTheme}
          className="w-full max-w-sm bg-blue-500 dark:bg-blue-600 rounded-lg p-4 mb-4"
        >
          <Text className="text-white text-center font-semibold select-none">
            Toggle Theme
          </Text>
        </Pressable>

        <Pressable onPress={() => router.back()}>
          <Text className="text-blue-500 dark:text-blue-400 font-semibold">
            Go Back
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
