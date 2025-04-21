import { Tag } from "antd";

const { CheckableTag } = Tag;

const CustomTag = ({
  type = "default",
  checkableTagKey,
  isCheckableTagChecked = false,
  onChangeCheckableTag = () => {},
  closable = false,
  onClose = () => {},
  children,
  closeIcon,
  color,
  className,
}) => {
  if (type === "checkable") {
    return (
      <CheckableTag
        key={checkableTagKey}
        checked={isCheckableTagChecked}
        onChange={onChangeCheckableTag}
        className={className}
      >
        {children}
      </CheckableTag>
    );
  }

  return (
    <Tag
      color={color}
      closeIcon={closeIcon}
      closable={closable}
      onClose={onClose}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default CustomTag;
