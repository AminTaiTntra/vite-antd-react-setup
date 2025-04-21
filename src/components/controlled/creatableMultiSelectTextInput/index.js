import CreatableSelect from "react-select/creatable";

const CreatableMultiSelectTextInput = ({
  onChange = () => {},
  inputValue,
  value,
  label,
  placeholder,
  isMulti = false,
  isRequired = false,
  isClearable = false,
  showError,
  error,
  className,
  isDisabled,
  onInputChange = () => {},
  onKeyDown = () => {},
  onBlur = () => {},
}) => {
  return (
    <div className={`custom-select-box ${showError && error ? "error-border" : ""}`}>
      {label && (
        <span>
          {isRequired && <span className="required">* </span>}
          {label}
        </span>
      )}
      <CreatableSelect
        components={{ DropdownIndicator: null }}
        inputValue={inputValue}
        isClearable={isClearable}
        isMulti={isMulti}
        menuIsOpen={false}
        onChange={onChange}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
        className={`${className} setinput-height`}
        getOptionLabel={(option) => option?.name || option?.label}
        getOptionValue={(option) => option?.id || option?.value}
        isDisabled={isDisabled}
        onBlur={onBlur}
      />
      {showError && error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default CreatableMultiSelectTextInput;
