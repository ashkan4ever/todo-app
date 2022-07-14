/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Button from "antd-button-color";
import EmptyAction from "../../components/EmptyAction";
import TaskForm from "../../components/Modals/TaskForm";
import PageTitle from "../../components/PageTitle";
import { useAppSelector } from "../../hooks";
import TaskItem from "../../components/TaskItem";
import { PlusOutlined } from "@ant-design/icons";
import { container, listContainer, alignRight } from "./style";

const HomeContainer = () => {
  const todos = useAppSelector((store) =>
    store.todos.filter((item) => item.status === "Todo")
  );
  const [modalForm, setModalForm] = useState<boolean>(false);

  if (todos.length === 0) {
    return (
      <>
        <PageTitle>Hello World</PageTitle>
        <EmptyAction />
      </>
    );
  }
  return (
    <>
      <PageTitle>Hello World</PageTitle>
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
            onClick={() => setModalForm(true)}
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          ></Button>
        </div>
      </div>
      <TaskForm visible={modalForm} onClose={() => setModalForm(false)} />
    </>
  );
};

export default HomeContainer;
