import { memo } from "react";
import { Space } from "antd";
import TaskForm from "../../components/Modals/TaskForm";
import React, { useState } from "react";
import { ITask, PriorityType } from "../../types";

interface IProps {
    priority: PriorityType;
}

const TaskItem = ({ priority }: IProps) => {
  const [modalForm, setModalForm] = useState<boolean>(false);

  return (
    <Space>
      <span>{priority}</span>
      <div className="priority-circle"></div>
    </Space>
  );
};

export default memo(TaskItem);
