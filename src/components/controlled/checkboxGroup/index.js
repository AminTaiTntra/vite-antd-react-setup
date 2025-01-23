import { Checkbox } from 'antd';

const CustomCheckboxGroup = ({
  name,
  disabled,
  label,
  onChange,
  options,
  value,
  isRequired,
  showError,
  error,
  status,
}) => {
  return (
    <div className={`custom-select-box ${(showError && error) || status ? 'error-border' : ''}`}>
      {label && (
        <label>
          {isRequired && <span className='required'>* </span>}
          {label}
        </label>
      )}
      <Checkbox.Group
        name={name}
        disabled={disabled}
        onChange={onChange}
        options={options}
        value={value}
      />
      {showError && error && <span className='error-text'>{error}</span>}
      {!error && status && <span className='error-text'>{status}</span>}
    </div>
  );
};

export default CustomCheckboxGroup;
