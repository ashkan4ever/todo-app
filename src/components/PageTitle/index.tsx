/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import Button from "antd-button-color";
import { titleStyle, container, leftButton } from "./style";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { showDoneTasks } from "../../store/slices/modalSlice";
interface IProps {
  children: ReactNode;
}

const PageTitle = ({ children }: IProps) => {
  const completedTasks = useAppSelector((store) =>
    store.todos.filter((item) => item.status === "Done")
  );
  const dispatch = useAppDispatch();

  return (
    <div css={container}>
      {completedTasks.length > 0 && (
        <Button
          css={leftButton}
          onClick={() => dispatch(showDoneTasks())}
          type="primary"
        >
          View Done Tasks
        </Button>
      )}

      <h1 css={titleStyle}>{children}</h1>
    </div>
  );
};

export default PageTitle;
