import CreatableSelect from "react-select/creatable";

const CreateControlledCreatableSelect = ({
  className,
  isDisabled = false,
  isValidNewOption,
  label,
  isRequired = false,
  isClearable = false,
  placeholder,
  formatCreateLabel,
  isMulti = false,
  menuIsOpen,
  name,
  onChange,
  options = [],
  showError = false,
  error,
  value,
  onBlur,
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
        name={name}
        value={value}
        className={className}
        isDisabled={isDisabled}
        components={{
          DropdownIndicator: null,
        }}
        isClearable={isClearable}
        options={options}
        menuIsOpen={menuIsOpen}
        isMulti={isMulti}
        onChange={onChange}
        onBlur={onBlur}
        isValidNewOption={isValidNewOption}
        placeholder={placeholder}
        formatCreateLabel={formatCreateLabel}
      />
      {showError && error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default CreateControlledCreatableSelect;
