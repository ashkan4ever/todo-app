/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Button, Empty } from "antd";
import { container } from "./style";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { showFormTask } from "../../store/slices/modalSlice";

const EmptyAction = () => {
  const tasksCount = useAppSelector((store) => store.todos.length);
  const dispatch = useAppDispatch();

  return (
    <div css={container}>
      <Empty description="No Task" />
      <Button onClick={() => dispatch(showFormTask())} type="primary">
        {tasksCount > 0 ? "Create a task" : "Create your first task ;)"}
      </Button>
    </div>
  );
};

export default memo(EmptyAction);
