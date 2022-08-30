import { Box, Flex, Text } from "native-base";
import { useTasks } from "../../contexts/TaskContext";

function Summary() {
  const { total } = useTasks();

  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Flex flexDirection="row" alignItems="center">
        <Text color="blue.300" fontWeight="bold">
          Created
        </Text>
        <Box backgroundColor="gray.400" paddingX="2" borderRadius="12" marginLeft="2">
          <Text color="gray.100" fontWeight="bold">
            {total.created}
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection="row" alignItems="center">
        <Text color="purple.300" fontWeight="bold">
          Concluded
        </Text>
        <Box backgroundColor="gray.400" paddingX="2" borderRadius="12" marginLeft="2">
          <Text color="gray.100" fontWeight="bold">
            {total.completed}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export { Summary };
