import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleSwitchChange = (value: boolean) => {
    console.log('Switch value changed to:', value);
    toggleColorScheme();
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-neutral-900">
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Text className="mb-1 text-xl font-mono text-black dark:text-white">
        NativeWind
      </Text>
      <Text className="mb-6 font-mono font-bold capitalize text-2xl text-black dark:text-white">
        {colorScheme} mode
      </Text>

      <Switch value={isDarkMode} onValueChange={handleSwitchChange} />

      <Link href="/about" className="mt-6">
        <Text className="text-black dark:text-white">Go to about</Text>
      </Link>
    </View>
  );
}
