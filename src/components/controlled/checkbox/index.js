import { Checkbox } from 'antd';

const CustomCheckbox = ({
  name,
  checked,
  defaultChecked,
  disabled,
  label,
  onChange,
  value,
  isRequired,
  showError,
  error,
  status,
  className,
}) => {
  return (
    <div
      className={`custom-select-box ${className} ${
        (showError && error) || status ? 'error-border' : ''
      }`}
    >
      <Checkbox
        id={name}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      >
        {label && (
          <label htmlFor={name}>
            <span
              style={{
                cursor: 'pointer',
              }}
            >
              {isRequired && <span className='required'>* </span>} {label}
            </span>
          </label>
        )}
      </Checkbox>
      {showError && error && <span className='error-text'>{error}</span>}
      {!error && status && <span className='error-text'>{status}</span>}
    </div>
  );
};

export default CustomCheckbox;
