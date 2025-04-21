import { Input } from "antd";
// import "./input.less";
// import useInputWheel from "../../../hooks/useInputWheel";

const CustomControlledInput = ({
  type,
  size,
  label,
  scroll,
  value,
  onBlur = () => {},
  onPressEnter = () => {},
  onChange,
  name,
  placeholder,
  disabled,
  showError,
  error,
  isRequired = false,
  allowClear,
  prefix,
  className,
  status,
  readOnly,
}) => {

  return (
    <div
      className={`custom-select-box ${className} ${
        (showError && error) || status ? "error-border" : ""
      }`}
    >
      {label && (
        <label>
          {isRequired && <span className="required text-red-500">* </span>}
          {label}
        </label>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        size={size}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        onBlur={onBlur}
        allowClear={allowClear}
        prefix={prefix}
        autoComplete={"off"}
        // onKeyDown={onKeyDownPress}
        // onPaste={onPaste}
        onPressEnter={onPressEnter}
        className={className}
      />
      {showError && error && <span className="error-text text-red-500 mt-4">{error}</span>}
      {!error && status && <span className="error-text text-red-500">{status}</span>}
    </div>
  );
};

export default CustomControlledInput;
