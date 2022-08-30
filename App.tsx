import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Center, NativeBaseProvider, Spinner, StatusBar } from "native-base";
import { TaskProvider } from "./src/contexts/TaskContext";
import { Home } from "./src/screens/Home";
import { defaultTheme } from "./src/theme/default.theme";

function App() {
  const [inter] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {inter ? (
        <TaskProvider>
          <Home />
        </TaskProvider>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </NativeBaseProvider>
  );
}

export default App;
