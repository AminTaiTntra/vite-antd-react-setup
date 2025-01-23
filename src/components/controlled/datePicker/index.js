import { DatePicker } from "antd";
import moment from "moment";

const CustomDatePicker = ({
  onChange,
  label,
  isRequired,
  pickerType,
  dateFormat,
  renderExtraFooter,
  defaultValue,
  showError,
  error,
  value,
  showTime,
  disabled,
  name,
  type = "date",
  ranges,
  disabledDate,
  placeholder,
  className,
  disabledTime,
  ...restProp
}) => {
  const dateFormatDefault = dateFormat || "DD/MM/YYYY";

  if (type === "date") {
    return (
      <div
        className={`custom-select-box custom-select-datepicker ${
          showError && error ? "error-border-range" : ""
        }`}
      >
        {label && (
          <span>
            {isRequired && <span className="required">* </span>}
            {label}
          </span>
        )}
        <DatePicker
          {...restProp}
          disabledDate={disabledDate}
          onChange={onChange}
          name={name}
          showTime={showTime}
          defaultValue={defaultValue ? moment(defaultValue) : null}
          picker={pickerType}
          placeholder={placeholder || "Select date"}
          format={dateFormatDefault}
          renderExtraFooter={renderExtraFooter}
          disabled={disabled}
          value={value ? moment(value) : null}
          className={className}
        />
        {showError && error && <span className="error-text">{error}</span>}
      </div>
    );
  }
  
  if (type === "range") {
    return (
      <div className={`custom-select-box ${showError && error ? "error-border-range" : ""}`}>
        {label && (
          <span>
            {isRequired && <span className="required">* </span>}
            {label}
          </span>
        )}
        <DatePicker.RangePicker
          {...restProp}
          disabled={disabled}
          onChange={onChange}
          value={value ? [moment(value[0]), moment(value[1])] : []}
          ranges={ranges}
          placeholder={placeholder}
          className={className}
          format={dateFormatDefault}
          disabledDate={disabledDate}
        />
        {showError && error && <span className="error-text">{error}</span>}
      </div>
    );
  }
  
  if (type === "time") {
    return (
      <div
        className={`custom-select-box custom-select-datepicker ${
          showError && error ? "error-border-range" : ""
        }`}
      >
        {label && (
          <span>
            {isRequired && <span className="required">* </span>}
            {label}
          </span>
        )}
        <DatePicker.TimePicker
          value={value ? moment(value, "HH:mm:ss") : null}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder || "Select time"}
          disabledTime={disabledTime}
          {...restProp}
        />
        {showError && error && <span className="error-text">{error}</span>}
      </div>
    );
  }
};

export default CustomDatePicker;
