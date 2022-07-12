import { memo } from "react";
import { Button, Modal, Space } from "antd";
import TaskForm from "../../components/Modals/TaskForm";
import React, { useState } from "react";
import { ITask } from "../../types";
import Priority from "../Priority";
import { useAppDispatch } from "../../hooks";
import { perform } from "../../store/slices/todoSlice";

interface IProps {
    item: ITask
}

const TaskItem = ({ item }: IProps) => {
    const dispatch = useAppDispatch();
  const [modalForm, setModalForm] = useState<boolean>(false);

  return (
    <div>
      <div>
        <h3>{item.title}</h3>
        <Priority priority={item.priority} />
      </div>
      <div>
        <span>{item.text}</span>
        <Space>
            <Button onClick={() => setModalForm(true)}>Edit</Button>
            <Button type="primary" onClick={() => dispatch(perform(item))}>Done</Button>
        </Space>
      </div>
      <TaskForm visible={modalForm} onClose={() => setModalForm(false)} item={item} />
    </div>
  );
};

export default memo(TaskItem);
