import { Column, Divider, FlatList } from "native-base";
import { useTasks } from "../../contexts/TaskContext";
import { Empty } from "./Empty";
import { Summary } from "./Summary";
import { Task } from "./Task";

function Tasks() {
  const { tasks } = useTasks();

  return (
    <Column padding="6">
      <Summary />
      <Divider marginTop="5" backgroundColor="gray.400" />
      <FlatList
        data={tasks}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => <Task {...item} />}
        marginTop="6"
        ListEmptyComponent={<Empty />}
      />
    </Column>
  );
}

export { Tasks };
