import React, { useId } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../hooks";
import { add, edit } from "../../../store/slices/todoSlice";
import { ITask } from "../../../types";
import * as Yup from "yup";
import { Input, Radio, Modal, Button } from "antd";
import { useAppSelector } from "../../../hooks";
import TaskItem from "../../../components/TaskItem";

const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const DoneTasks = ({ visible, onClose }: IProps) => {
  const todos = useAppSelector((store) => store.todos.filter(item => item.status === "Done"));
  const dispatch = useAppDispatch();

  return (
    <Modal title="Done Tasks" footer={false} visible={visible} onCancel={onClose}>
      <div>
        {todos
          .map((item) => (
            <TaskItem key={item.id} item={item} />
          ))}
      </div>
    </Modal>
  );
};

export default DoneTasks;
