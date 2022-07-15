/** @jsxImportSource @emotion/react */
import Button from "antd-button-color";
import { PlusOutlined } from "@ant-design/icons";
import {
  EmptyAction,
  PageTitle,
  TaskItem,
  ModalDoneTasks,
  ModalTaskForm,
  ModalTaskShow,
} from "@/components";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import {
  closeDoneTasks,
  closeFormTask,
  closeShowTask,
  showFormTask,
} from "@/store/slices/modalSlice";
import { container, listContainer, alignRight } from "./style";

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
        <ModalTaskForm
          visible={modals.formTask.visible}
          item={modals.formTask.item}
          onClose={() => dispatch(closeFormTask())}
        />
      )}
      {modals.showTask.visible && modals.showTask.item && (
        <ModalTaskShow
          visible={modals.showTask.visible}
          onClose={() => dispatch(closeShowTask())}
          item={modals.showTask.item}
        />
      )}
      {modals.doneTasks && (
        <ModalDoneTasks
          visible={modals.doneTasks}
          onClose={() => dispatch(closeDoneTasks())}
        />
      )}
    </>
  );
};

export default HomeContainer;
