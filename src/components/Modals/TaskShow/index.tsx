/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Button from "antd-button-color";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { ITask, perform, remove } from "@/store/slices/todoSlice";
import { closeShowTask, showFormTask } from "@/store/slices/modalSlice";
import { buttonContainer, container, textContainer } from "./style";
import { TextContainer, TitleContainer } from "./components";

const { confirm } = Modal;

interface IProps {
  visible: boolean;
  onClose: () => void;
  item: ITask;
}

const TaskShow = ({ visible, onClose, item }: IProps) => {
  const task =
    useAppSelector((store) =>
      store.todos.find((todo) => todo.id === item.id)
    ) || item;
  const dispatch = useAppDispatch();

  const showDeleteConfirm = useCallback(() => {
    confirm({
      title: "Are you sure you want to delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(remove(task));
        onClose();
      },
    });
  }, [task, dispatch, onClose]);

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
          <TitleContainer title={task.title} priority={task.priority} />
          <div css={textContainer}>
            {task.text && (
              <TextContainer text={task.text} label="Description" />
            )}
            {task.gifts && (
              <TextContainer text={task.gifts} label="Gifts and KPI" />
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
