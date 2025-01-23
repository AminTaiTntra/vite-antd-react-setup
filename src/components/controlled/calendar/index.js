import { Calendar } from 'antd';

const CustomCalendar = ({
  defaultValue,
  value,
  disabledDate,
  mode,
  onChange,
  onPanelChange,
  onSelect,
  validRange,
  className,
  style,
}) => {
  return (
    <Calendar
      defaultValue={defaultValue}
      value={value}
      disabledDate={disabledDate}
      mode={mode}
      onChange={onChange}
      onPanelChange={onPanelChange}
      onSelect={onSelect}
      validRange={validRange}
      className={className}
      style={style}
    />
  );
};

export default CustomCalendar;
