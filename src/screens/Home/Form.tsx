import { Ionicons } from "@expo/vector-icons";
import { Column, HStack, Icon, IconButton, Input } from "native-base";
import { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";

function Form() {
  const [hasError, setHasError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const { addTask } = useTasks();

  function handleAddTask() {
    if (title === "") {
      return setHasError(true);
    }

    addTask(title);
    setTitle("");
  }

  function handleInputTitle(title: string) {
    setHasError(false);
    setTitle(title);
  }

  return (
    <Column padding="6">
      <HStack space="1" marginTop="-12">
        <Input
          flex="1"
          backgroundColor="gray.400"
          height="12"
          borderRadius="6"
          placeholder="Add a new task"
          borderColor={hasError ? "red.300" : "gray.400"}
          color="gray.100"
          fontSize="md"
          value={title}
          onChangeText={handleInputTitle}
        />
        <IconButton
          icon={<Icon as={<Ionicons name="add-circle-outline" />} color="white" />}
          borderRadius="6"
          backgroundColor="blue.500"
          width="12"
          onPress={handleAddTask}
        />
      </HStack>
    </Column>
  );
}

export { Form };
