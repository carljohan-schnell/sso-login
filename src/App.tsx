import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleSwitchChange = (value: boolean) => {
    console.log('Switch value changed to:', value);
    toggleColorScheme();
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-neutral-900">
      <Text className="mb-1 text-xl font-mono text-black dark:text-white">
        NativeWind
      </Text>
      <Text className="mb-6 font-mono font-bold capitalize text-2xl text-black dark:text-white">
        {colorScheme} mode on
      </Text>
      <Switch value={isDarkMode} onValueChange={handleSwitchChange} />
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}
