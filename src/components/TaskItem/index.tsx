/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Space } from "antd";
import Button from "antd-button-color";
import TaskForm from "../../components/Modals/TaskForm";
import TaskShow from "../../components/Modals/TaskShow";
import { useState } from "react";
import { ITask } from "../../types";
import Priority from "../Priority";
import { useAppDispatch } from "../../hooks";
import { perform } from "../../store/slices/todoSlice";
import { container } from "./style";
import TooltipEllipsis from "../TooltipEllipsis";

interface IProps {
  item: ITask;
}

const TaskItem = ({ item }: IProps) => {
  const dispatch = useAppDispatch();
  const [modalForm, setModalForm] = useState<boolean>(false);
  const [showTask, setShowTask] = useState<boolean>(false);

  return (
    <div
      css={container}
      onClick={() => {
        setShowTask(true);
      }}
    >
      <TooltipEllipsis
        text={item.title}
        renderProp={(style) => <h3 css={style}>{item.title}</h3>}
      />
      <Priority priority={item.priority} color={item.priorityColor} />
      <TooltipEllipsis
        text={item.text}
        renderProp={(style) => <span css={style}>{item.text}</span>}
      />
      {item.status !== "Done" && (
        <Space size="middle">
          <Button
            ghost
            type="info"
            onClick={(e) => {
              e.stopPropagation();
              setModalForm(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="success"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(perform(item));
            }}
          >
            Done
          </Button>
        </Space>
      )}
      <TaskForm
        visible={modalForm}
        onClose={(e) => {
          e?.stopPropagation();
          setModalForm(false);
        }}
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
