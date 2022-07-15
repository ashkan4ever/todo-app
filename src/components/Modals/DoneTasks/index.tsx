/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Modal } from "antd";
import { useAppSelector } from "@/utils/hooks";
import { TaskItem } from "@/components";
import { listContainer } from "./style";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const DoneTasks = ({ visible, onClose }: IProps) => {
  const todos = useAppSelector((store) =>
    store.todos.filter((item) => item.status === "Done")
  );

  return (
    <Modal
      title="Done Tasks"
      footer={false}
      visible={visible}
      onCancel={onClose}
      width={700}
      bodyStyle={{ background: "#f5f5f5" }}
    >
      <div css={listContainer}>
        {todos.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </div>
    </Modal>
  );
};

export default memo(DoneTasks);
