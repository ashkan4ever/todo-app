/** @jsxImportSource @emotion/react */
import Button from "antd-button-color";
import EmptyAction from "../../components/EmptyAction";
import TaskForm from "../../components/Modals/TaskForm";
import PageTitle from "../../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import TaskItem from "../../components/TaskItem";
import { PlusOutlined } from "@ant-design/icons";
import { container, listContainer, alignRight } from "./style";
import DoneTasks from "../../components/Modals/DoneTasks";
import TaskShow from "../../components/Modals/TaskShow";
import {
  closeDoneTasks,
  closeFormTask,
  closeShowTask,
  showFormTask,
} from "../../store/slices/modalSlice";

const HomeContainer = () => {
  const todos = useAppSelector((store) => store.todos);
  const modals = useAppSelector((store) => store.modals);
  const dispatch = useAppDispatch();

  return (
    <>
      <PageTitle>Hello World</PageTitle>
      {todos.filter((item) => item.status === "Todo").length === 0 ? (
        <EmptyAction />
      ) : (
        <div css={container}>
          <div css={listContainer}>
            {todos
              .filter((item) => item.status === "Todo")
              .map((item) => (
                <TaskItem key={item.id} item={item} />
              ))}
          </div>
          <div css={alignRight}>
            <Button
              onClick={() => dispatch(showFormTask())}
              size="large"
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            ></Button>
          </div>
        </div>
      )}

      {modals.formTask.visible && (
        <TaskForm
          visible={modals.formTask.visible}
          item={modals.formTask.item}
          onClose={() => dispatch(closeFormTask())}
        />
      )}
      {modals.showTask.visible && modals.showTask.item && (
        <TaskShow
          visible={modals.showTask.visible}
          onClose={() => dispatch(closeShowTask())}
          item={modals.showTask.item}
        />
      )}
      {modals.doneTasks && (
        <DoneTasks
          visible={modals.doneTasks}
          onClose={() => dispatch(closeDoneTasks())}
        />
      )}
    </>
  );
};

export default HomeContainer;
