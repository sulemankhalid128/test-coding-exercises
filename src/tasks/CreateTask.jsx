import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ContainerFluid,
  Label,
  Input,
  Button,
  Heading,
} from "../Commons";
import { addTask } from "../redux/tasks/actions";

const CreateTask = ({ history }) => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ name: taskName }));
    history.push("/");
  };
  return (
    <Container>
      <ContainerFluid>
        <Heading>Create Tasks</Heading>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <Label>Task Name:</Label>
          <Input
            type="text"
            name="task"
            placeholder="Enter name here..."
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            value={taskName}
            required
            autoComplete="true"
          />
          <Button type="submit">Save</Button>
        </form>
      </ContainerFluid>
    </Container>
  );
};

export default CreateTask;
