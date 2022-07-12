import React, { memo, useId } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../hooks";
import { add, edit } from "../../../store/slices/todoSlice";
import { ITask } from "../../../types";
import * as Yup from "yup";
import { Input, Radio, Modal, Button } from "antd";

const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  item?: ITask;
}

const TaskForm = ({ visible, onClose, item }: IProps) => {
  const dispatch = useAppDispatch();
  const editMode = item?.id;
  const id = useId();

  const yupSchema = Yup.object().shape({
    title: Yup.string().required("sdfs"),
    text: Yup.string().required(),
    priority: Yup.string().required(),
    status: Yup.string().required(),
    gifts: Yup.string(),
    id: Yup.string(),
  });

  const initialValues: ITask = {
    title: item?.title || "",
    text: item?.text || "",
    priority: item?.priority || "Low",
    status: item?.status || "Todo",
    gifts: item?.gifts || "",
    id: item?.id || "",
  };

  return (
    <Modal title="Add Task" footer={false} visible={visible} onCancel={onClose}>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={yupSchema}
          onSubmit={(values) => {
            if (editMode) {
              dispatch(edit(values));
            } else {
              dispatch(add({ ...values, id }));
            }
            onClose()
          }}
          render={(formikProps) => (
            <Form>
              <Input
                name="title"
                value={formikProps.values.title}
                onChange={formikProps.handleChange}
                placeholder="title"
              />
              <TextArea
                name="text"
                value={formikProps.values.text}
                onChange={formikProps.handleChange}
                rows={4}
                placeholder="description"
              />
              <Input
                name="gifts"
                value={formikProps.values.gifts}
                onChange={formikProps.handleChange}
                placeholder="Gifts"
              />
              <Radio.Group
                name="priority"
                onChange={formikProps.handleChange}
                value={formikProps.values.priority}
              >
                <Radio value="Low">Low</Radio>
                <Radio value="Medium">Medium</Radio>
                <Radio value="High">High</Radio>
              </Radio.Group>
              <div>
                <Button type="primary" htmlType="submit">
                  {editMode? 'Edit' : 'Add'}
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </Modal>
  );
};

export default memo(TaskForm);
