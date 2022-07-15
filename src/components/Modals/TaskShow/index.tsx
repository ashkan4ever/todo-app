/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { ITask, perform, remove } from "../../../store/slices/todoSlice";
import { Modal } from "antd";
import Button from "antd-button-color";
import {
  buttonContainer,
  container,
  textContainer,
  labelText,
  titleContainer,
  priorityContainer,
} from "./style";
import Priority from "../../Priority";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { closeShowTask, showFormTask } from "../../../store/slices/modalSlice";

const { confirm } = Modal;

interface IProps {
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  item: ITask;
}

const TaskShow = ({ visible, onClose, item }: IProps) => {
  const task =
    useAppSelector((store) =>
      store.todos.find((todo) => todo.id === item.id)
    ) || item;
  const dispatch = useAppDispatch();

  const showDeleteConfirm = useCallback(
    (removeEvent: React.MouseEvent<HTMLElement, MouseEvent>) => {
      confirm({
        title: "Are you sure you want to delete this task?",
        icon: <ExclamationCircleOutlined />,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          dispatch(remove(task));
          onClose(removeEvent);
        },
      });
    },
    [task, dispatch, onClose]
  );

  return (
    <>
      <Modal
        title=""
        footer={false}
        visible={visible}
        onCancel={onClose}
        width={700}
      >
        <div css={container}>
          <div css={titleContainer}>
            <div css={priorityContainer}>
              <Priority priority={task.priority} align="left" />
            </div>
            <h2>{task.title}</h2>
          </div>
          <div css={textContainer}>
            {task.text && (
              <p>
                <span css={labelText}>Description: </span>
                {task.text}
              </p>
            )}
            {task.gifts && (
              <p>
                <span css={labelText}>Gifts and KPI: </span>
                {task.gifts}
              </p>
            )}
          </div>
          {task.status !== "Done" && (
            <div css={buttonContainer}>
              <Button
                type="info"
                onClick={() => dispatch(showFormTask(task))}
                ghost
              >
                Edit
              </Button>
              <Button
                type="success"
                onClick={() => {
                  dispatch(perform(task));
                  dispatch(closeShowTask());
                }}
              >
                Done
              </Button>
              <Button type="danger" onClick={showDeleteConfirm} danger>
                Delete
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default TaskShow;
