import { Button, Modal } from "antd";
import React, { useState } from "react";
import EmptyAction from "../../components/EmptyAction";
import TaskForm from "../../components/Modals/TaskForm";
import PageTitle from "../../components/PageTitle";
import { IStore } from "../../types";
import { useAppSelector } from "../../hooks";
import TaskItem from "../../components/TaskItem";
import { PlusOutlined } from "@ant-design/icons";

const HomeContainer = () => {
  const todos = useAppSelector((store: IStore) => store.todos);
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
      <div>
        <Button type="primary">View Done Tasks</Button>
        <div>
          {todos
            .filter((item) => item.status === "Todo")
            .map((item) => (
              <TaskItem key={item.id} item={item} />
            ))}
        </div>
        <div>
          <Button onClick={() => setModalForm(true)} size="large" type="primary" shape="circle" icon={<PlusOutlined />}></Button>
        </div>
      </div>
      <TaskForm visible={modalForm} onClose={() => setModalForm(false)} />
    </>
  );
};

export default HomeContainer;
