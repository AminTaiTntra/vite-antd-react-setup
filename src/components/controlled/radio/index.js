import { Radio } from "antd";
import { Fragment } from "react";

const { Group } = Radio;

const CustomRadio = ({ name, label, value, disableAll, onChange, options, className }) => {
  return (
    <Fragment>
      {label && <span className={className}>{label}</span>}
      <Group
        name={name}
        value={value}
        disabled={disableAll}
        onChange={onChange}
      >
        {options?.map((option) => (
          <Radio key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </Radio>
        ))}
      </Group>
    </Fragment>
  );
};

export default CustomRadio;
