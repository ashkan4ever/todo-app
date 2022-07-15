/** @jsxImportSource @emotion/react */
import { memo, ReactNode } from "react";
import Button from "antd-button-color";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { showDoneTasks } from "@/store/slices/modalSlice";
import { titleStyle, container, leftButton } from "./style";

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
      <h1 css={titleStyle}>{children}</h1>
      {completedTasks.length > 0 && (
        <Button
          css={leftButton}
          onClick={() => dispatch(showDoneTasks())}
          type="primary"
        >
          View Done Tasks
        </Button>
      )}
    </div>
  );
};

export default memo(PageTitle);
