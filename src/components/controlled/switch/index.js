import { Switch } from "antd";

const CustomSwitch = ({
  checked,
  className,
  defaultChecked,
  disabled,
  loading,
  size = "default",
  onClick,
  onChange,
  checkedChildren,
  unCheckedChildren,
}) => {
  return (
    <Switch
      checked={checked}
      className={className}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      size={size}
      onClick={onClick}
      onChange={onChange}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
    />
  );
};

export default CustomSwitch;
