import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../hooks";
import { add, edit, perform, remove } from "../../../store/slices/todoSlice";
import { ITask } from "../../../types";
import * as Yup from "yup";
import { Input, Radio, Modal, Button, Space } from "antd";
import { useAppSelector } from "../../../hooks";
import TaskItem from "../../../components/TaskItem";
import TaskForm from "../../../components/Modals/TaskForm";

const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  item: ITask;
}

const TaskShow = ({ visible, onClose, item }: IProps) => {
  const dispatch = useAppDispatch();
  const [modalForm, setModalForm] = useState<boolean>(false);

  return (
    <>
      <Modal
        title={item.title}
        footer={false}
        visible={visible}
        onCancel={onClose}
      >
        <div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          {item.gifts && <p>{item.gifts}</p>}
          <Space>
            <Button onClick={() => setModalForm(true)}>Edit</Button>
            <Button onClick={() => dispatch(perform(item))} type="primary">
              Done
            </Button>
            <Button onClick={() => dispatch(remove(item))} danger>
              Delete
            </Button>
          </Space>
        </div>
      </Modal>
      <TaskForm
        visible={modalForm}
        onClose={() => setModalForm(false)}
        item={item}
      />
    </>
  );
};

export default TaskShow;
