import { memo } from "react";
import { Button } from "antd";
import TaskForm from "../../components/Modals/TaskForm";
import React, { useState } from "react";

const EmptyAction = () => {
  const [modalForm, setModalForm] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setModalForm(true)} type="primary">
        Create your first task ;{")"}
      </Button>
      <TaskForm visible={modalForm} onClose={() => setModalForm(false)} />
    </div>
  );
};

export default memo(EmptyAction);
