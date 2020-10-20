import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../assets/images/delete.svg";
import {
  Box,
  Card,
  Container,
  ContainerFluid,
  CustomLink,
  Empty,
  Heading,
  Icon,
} from "../Commons";
import { bulkDelete } from "../redux/tasks/actions";

const Tasks = () => {
  const tasks = useSelector((state) => state.taskList.tasks);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleChange = (e, index) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, e.target.value]);
    } else {
      let _ids = selectedIds;
      _ids.splice(index, 1);
      setSelectedIds([..._ids]);
    }
  };

  return (
    <Container>
      <ContainerFluid>
        <Heading>Tasks here</Heading>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomLink to="/create-task">Add Task</CustomLink>
          {selectedIds.length ? (
            <Icon
              onClick={() => {
                dispatch(bulkDelete({ ids: selectedIds }));
              }}
            >
              <img src={deleteIcon} alt="" width="18" />
            </Icon>
          ) : (
            ""
          )}
        </div>
        {tasks.length ? (
          tasks.map((task, index) => (
            <Card key={index}>
              <Box>
                <input
                  type="checkbox"
                  key={task.id}
                  value={task.id}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </Box>
              <div>{task.name}</div>
            </Card>
          ))
        ) : (
          <Empty> No record found!</Empty>
        )}
      </ContainerFluid>
    </Container>
  );
};

export default Tasks;
