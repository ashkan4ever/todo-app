/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Button, Empty } from "antd";
import TaskForm from "../../components/Modals/TaskForm";
import React, { useState } from "react";
import { container } from "./style";

const EmptyAction = () => {
  const [modalForm, setModalForm] = useState<boolean>(false);

  return (
    <div css={container}>
      <Empty description="No Task" />
      <Button onClick={() => setModalForm(true)} type="primary">
        Create your first task ;{")"}
      </Button>
      <TaskForm visible={modalForm} onClose={() => setModalForm(false)} />
    </div>
  );
};

export default memo(EmptyAction);
