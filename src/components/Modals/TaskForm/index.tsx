/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../utils/hooks";
import { add, edit, ITask } from "../../../store/slices/todoSlice";
import * as Yup from "yup";
import { Input, Radio, Modal, Button } from "antd";
import { buttonContainer, container, labelText } from "./style";

const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  item?: ITask;
}

const TaskForm = ({ visible, onClose, item }: IProps) => {
  const dispatch = useAppDispatch();
  const editMode = item?.id;

  const yupSchema = Yup.object().shape({
    title: Yup.string().required("sdfs"),
    text: Yup.string(),
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
    <Modal
      title={editMode ? "Edit Task" : "Add Task"}
      footer={false}
      visible={visible}
      onCancel={onClose}
    >
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={yupSchema}
          onSubmit={(values) => {
            if (editMode) {
              dispatch(edit(values));
            } else {
              dispatch(add(values));
            }
            onClose();
          }}
          render={(formikProps) => (
            <Form css={container}>
              <Input
                name="title"
                status={formikProps.errors.title ? "error" : ""}
                value={formikProps.values.title}
                onChange={formikProps.handleChange}
                placeholder="title*"
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
                placeholder="Gifts and KPI for this task ;)"
              />
              <div>
                <label css={labelText} htmlFor="priority">
                  Priority:
                </label>
                <Radio.Group
                  id="priority"
                  name="priority"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.priority}
                >
                  <Radio value="Low">Low</Radio>
                  <Radio value="Medium">Medium</Radio>
                  <Radio value="High">High</Radio>
                </Radio.Group>
              </div>
              <div css={buttonContainer}>
                <Button block type="primary" htmlType="submit">
                  {editMode ? "Edit" : "Add"}
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
