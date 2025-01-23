import Select from "react-select";

const CustomDropdown = ({
  className,
  isDisabled,
  label,
  isRequired,
  isLoading,
  isClearable,
  isSearchable,
  options,
  placeholder,
  defaultValue,
  isMulti,
  name,
  onChange,
  showError,
  error,
  value,
  getOptionLabel,
  getOptionValue,
  onBlur,
  onMenuOpen,
  closeMenuOnSelect,
  menuPlacement,
  menuPortalTarget,
}) => {
  return (
    <div className={`custom-dropdown custom-select-box ${showError && error ? "error-border" : ""}`}>
      {label && (
        <span>
          {label}
          {isRequired && <span className='required'>*</span>}
        </span>
      )}
      <Select
        className={className}
        isDisabled={isDisabled}
        isLoading={isLoading}
        value={value}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={isMulti}
        options={options}
        defaultValue={defaultValue}
        closeMenuOnSelect={closeMenuOnSelect}
        name={name}
        menuPlacement={menuPlacement}
        menuPortalTarget={menuPortalTarget}
        onMenuOpen={onMenuOpen}
        onChange={onChange}
        onBlur={onBlur}
        theme={(theme) => ({
          ...theme,
          // colors: {
          //   primary: "blue",
          //   neutral0: "white",
          // },
        })}
      />
      {showError && error && <span className='error-text'>{error}</span>}
    </div>
  );
};

export default CustomDropdown;
