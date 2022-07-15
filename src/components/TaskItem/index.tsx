/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Space } from "antd";
import Button from "antd-button-color";
import Priority from "../Priority";
import { useAppDispatch } from "../../utils/hooks";
import { ITask, perform } from "../../store/slices/todoSlice";
import { container } from "./style";
import TooltipEllipsis from "../TooltipEllipsis";
import { showFormTask, showShowTask } from "../../store/slices/modalSlice";

interface IProps {
  item: ITask;
}

const TaskItem = ({ item }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      css={container}
      onClick={() => {
        dispatch(showShowTask(item));
      }}
    >
      <TooltipEllipsis
        text={item.title}
        renderProp={(style) => <h3 css={style}>{item.title}</h3>}
      />
      <Priority priority={item.priority} />
      <TooltipEllipsis
        text={item.text}
        renderProp={(style) => <span css={style}>{item.text}</span>}
      />
      {item.status !== "Done" && (
        <Space size="middle">
          <Button
            ghost
            type="info"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(showFormTask(item));
            }}
          >
            Edit
          </Button>
          <Button
            type="success"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(perform(item));
            }}
          >
            Done
          </Button>
        </Space>
      )}
    </div>
  );
};

export default memo(TaskItem);
