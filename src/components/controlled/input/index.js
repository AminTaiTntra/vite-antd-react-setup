import { Input } from "antd";

const CustomControlledInput = ({
  type = "text",
  size = "middle",
  label,
  value,
  onBlur = () => {},
  onPressEnter = () => {},
  onChange,
  name,
  placeholder = "",
  disabled = false,
  showError = false,
  error = "",
  isRequired = false,
  allowClear = false,
  prefix,
  className = "",
  status = "",
  readOnly = false,
}) => {
  return (
    <div
      className={`custom-select-box ${className} ${
        showError && error ? "error-border" : ""
      } ${status ? "error-border" : ""}`}
    >
      {label && (
        <label className="custom-input-label">
          {isRequired && <span className="required">*</span>} {label}
        </label>
      )}
      <Input
        type={type}
        size={size}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        allowClear={allowClear}
        prefix={prefix}
        autoComplete="off"
        onBlur={onBlur}
        onChange={onChange}
        onPressEnter={onPressEnter}
        className={`custom-input ${className}`}
      />
      {(showError && error) && <span className="error-text">{error}</span>}
      {(!error && status) && <span className="status-text">{status}</span>}
    </div>
  );
};

export default CustomControlledInput;
