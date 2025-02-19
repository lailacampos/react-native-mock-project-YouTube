import { Stack, Slot } from "expo-router";

interface ScreenOptions {
  name: string;
  options: {
    title: string;
    headerShown: boolean;
  };
}

const screensOptionsList: ScreenOptions[] = [
  { name: "index", options: { title: "Home Screen", headerShown: true } },
  { name: "profile", options: { title: "Profile Screen", headerShown: true } },
];

const RootLayout: React.FC = () => {
  return (
    <Stack>
      {screensOptionsList.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
        />
      ))}
    </Stack>
    );
}

export default RootLayout;