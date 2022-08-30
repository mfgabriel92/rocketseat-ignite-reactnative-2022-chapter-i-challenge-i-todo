import { Column } from "native-base";
import { useState } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { Tasks } from "./Tasks";

function Home() {
  return (
    <Column flex="1" backgroundColor="gray.600">
      <Header />
      <Form />
      <Tasks />
    </Column>
  );
}

export { Home };
