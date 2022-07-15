/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Priority } from "@/components";
import { PriorityType } from "@/store/slices/todoSlice";
import { labelText, titleContainer, priorityContainer } from "./style";

interface TitleContainerCmpProps {
  title: string;
  priority: PriorityType;
}

const TitleContainerCmp = ({ title, priority }: TitleContainerCmpProps) => {
  return (
    <div css={titleContainer}>
      <h2>{title}</h2>
      <div css={priorityContainer}>
        <Priority priority={priority} align="left" />
      </div>
    </div>
  );
};

export const TitleContainer = memo(TitleContainerCmp);

interface TextContainerCmpProps {
  text: string;
  label: string;
}

const TextContainerCmp = ({ text, label }: TextContainerCmpProps) => {
  return (
    <p>
      <span css={labelText}>{`${label}: `}</span>
      {text}
    </p>
  );
};

export const TextContainer = memo(TextContainerCmp);
