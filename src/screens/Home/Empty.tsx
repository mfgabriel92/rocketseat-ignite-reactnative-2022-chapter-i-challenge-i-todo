import { Ionicons } from "@expo/vector-icons";
import { Center, Icon, Text, VStack } from "native-base";

function Empty() {
  return (
    <Center marginTop="12">
      <VStack alignItems="center" space="1">
        <Icon as={<Ionicons name="clipboard-outline" />} size="5xl" />
        <Text color="gray.300" fontWeight="bold" marginTop="3">
          You still do not have any registered tasks
        </Text>
        <Text color="gray.300">Create tasks and organize your todo items</Text>
      </VStack>
    </Center>
  );
}

export { Empty };
