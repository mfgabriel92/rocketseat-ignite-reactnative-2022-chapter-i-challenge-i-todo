import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Icon, IconButton, Text } from "native-base";
import { Pressable } from "react-native";
import { TaskProps, useTasks } from "../../contexts/TaskContext";

function Task({ id, title, isCompleted }: TaskProps) {
  const { toggleTaskStatus, removeTask } = useTasks();

  return (
    <Pressable onPress={() => toggleTaskStatus(id)}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        padding="3"
        backgroundColor="gray.500"
        borderRadius="6"
        borderColor="gray.400"
        borderWidth="1"
        marginBottom="2"
        minHeight="12"
        space="3"
      >
        <Box
          width="5"
          height="5"
          borderWidth="2"
          borderColor={isCompleted ? "purple.300" : "blue.300"}
          backgroundColor={isCompleted ? "purple.300" : "gray.500"}
          borderRadius="full"
        >
          {isCompleted ?? <Icon as={<Ionicons name="checkbox" />} color="gray.100" size="lg" />}
        </Box>
        <Text flex="1" color={isCompleted ? "gray.300" : "gray.100"} strikeThrough={isCompleted}>
          {title}
        </Text>
        <IconButton
          icon={<Icon as={<Ionicons name="trash" />} color="red.300" size="md" />}
          onPress={() => removeTask(id)}
          _pressed={{
            backgroundColor: "gray.400",
            color: "red.300",
          }}
        />
      </HStack>
    </Pressable>
  );
}

export { Task };
