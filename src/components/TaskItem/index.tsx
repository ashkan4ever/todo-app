import { memo } from "react";
import { Button, Modal, Space } from "antd";
import TaskForm from "../../components/Modals/TaskForm";
import TaskShow from "../../components/Modals/TaskShow";
import React, { useState } from "react";
import { ITask } from "../../types";
import Priority from "../Priority";
import { useAppDispatch } from "../../hooks";
import { perform } from "../../store/slices/todoSlice";

interface IProps {
  item: ITask;
}

const TaskItem = ({ item }: IProps) => {
  const dispatch = useAppDispatch();
  const [modalForm, setModalForm] = useState<boolean>(false);
  const [showTask, setShowTask] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setShowTask(true);
      }}
    >
      <div>
        <h3>{item.title}</h3>
        <Priority priority={item.priority} />
      </div>
      <div>
        <span>{item.text}</span>
        {item.status !== "Done" && (
          <Space>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setModalForm(true);
              }}
            >
              Edit
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(perform(item));
              }}
            >
              Done
            </Button>
          </Space>
        )}
      </div>
      <TaskForm
        visible={modalForm}
        onClose={(e) => {
            e?.stopPropagation();
            setModalForm(false)}}
        item={item}
      />
      <TaskShow
        visible={showTask}
        onClose={(e) => {
          e.stopPropagation();
          setShowTask(false);
        }}
        item={item}
      />
    </div>
  );
};

export default memo(TaskItem);
