/** @jsxImportSource @emotion/react */
import { memo, ReactNode } from "react";
import { useState } from "react";
import Button from "antd-button-color";
import { titleStyle, container, leftButton } from "./style";
import DoneTasks from "../../components/Modals/DoneTasks";
import { useAppSelector } from "../../hooks";
interface IProps {
  children: ReactNode;
}

const PageTitle = ({ children }: IProps) => {
  const completedTasks = useAppSelector((store) =>
    store.todos.filter((item) => item.status === "Done")
  );
  const [modalDoneTasks, setModalDoneTasks] = useState<boolean>(false);

  return (
    <div css={container}>
      {completedTasks.length > 0 && (
        <Button css={leftButton} onClick={() => setModalDoneTasks(true)} type="primary">
          View Done Tasks
        </Button>
      )}

      <h1 css={titleStyle}>{children}</h1>
      <DoneTasks
        visible={modalDoneTasks}
        onClose={() => setModalDoneTasks(false)}
      />
    </div>
  );
};

export default memo(PageTitle);
