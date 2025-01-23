import { Input } from "antd";

const CustomControlledTextArea = ({
  name,
  label,
  className = "",
  allowClear = false,
  autoSize = { minRows: 2, maxRows: 6 },
  bordered = true,
  defaultValue = "",
  maxLength,
  showCount = false,
  value,
  onPressEnter = () => {},
  onResize = () => {},
  showError = false,
  error = "",
  status,
  isRequired = false,
  placeholder = "",
  disabled = false,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`custom-select-box ${className} ${
        (showError && error) || status ? "error-border" : ""
      }`}
    >
      {label && (
        <label>
          {isRequired && <span className="required">* </span>}
          {label}
        </label>
      )}
      <Input.TextArea
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoSize={autoSize}
        defaultValue={defaultValue}
        maxLength={maxLength}
        showCount={showCount}
        onResize={onResize}
        disabled={disabled}
        onBlur={onBlur}
        allowClear={allowClear}
        onPressEnter={onPressEnter}
      />
      {showError && error && <span className="error-text">{error}</span>}
      {!error && status && <span className="error-text">{status}</span>}
    </div>
  );
};

export default CustomControlledTextArea;
