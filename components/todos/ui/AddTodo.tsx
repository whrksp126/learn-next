import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import todosStore from "../store/todosStore";
import { observer } from "mobx-react-lite";

function AddTodo() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input 
        placeholder="New todo"
        value={todosStore.todo.text}
        onChange={(evt) => (todosStore.todo.text = evt.target.value)}
      />
      <Button 
        onClick={() => {
          if(todosStore.todo.text === '') {
            return alert("Hey! your todo can't be empty!!");
          }
          return todosStore.addTodo();
        }}
      >Add Todo</Button>
    </Grid>
  );
}

export default observer(AddTodo); 