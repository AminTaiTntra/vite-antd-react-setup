import { Button } from "../../common";
import CustomCheckbox from "../../common/checkbox/checkbox";
import CustomControlledInput from "../input";
import { Badge, Space, Switch, Tooltip } from "antd";
import moment from "moment";
import { DownloadOutlined, EyeTwoTone } from "@ant-design/icons";
import { trimString } from "../../../utility/method";

const RenderColumnData = ({
  item,
  value,
  text,
  disabled = false,
  checked = false,
  isFinal,
  operationalFunction = {},
  handlePreviewFile = () => {},
  index,
}) => {
  switch (item.valueDisplay) {
    case "checkbox": {
      return (
        <CustomCheckbox
          defaultValue={text}
          text={item?.checkboxTitle || ""}
          // editMode={editMode}
          checked={text || checked}
          disabled={item?.disabled || disabled || !item?.editable}
        />
      );
    }
    case "switch": {
      return (
        <Space size='middle'>
          <Switch
            size={"small"}
            disabled={!text}
            checked={text}
            onClick={(e) => operationalFunction?.handelSwitch(e, value, index)}
          />
        </Space>
      );
    }
    case "date_time": {
      return text ? <span>{moment(text).format("DD-MM-YYYY HH:mm:ss") || "-"}</span> : "-";
    }
    case "time": {
      return text ? <span>{moment(text).format("HH:mm:ss") || "-"}</span> : "-";
    }
    case "date": {
      return String(text)?.includes(".") ? (
        <span>{moment(text?.replaceAll(".", "-")).format("DD-MM-YYYY") || text}</span>
      ) : (
        <span>{text || "-"}</span>
      );
    }
    case "Planning_date": {
      return <span>{text || "-"}</span>;
    }
    case "image_file": {
      return text.map((item, indx) => (
        <a href={item?.url} key={indx}>
          {item?.label}
        </a>
      ));
    }
    case "webServerFile":
      if (!text?.file_name) {
        return <span> - </span>;
      }
      return (
        <div className='preview-icon'>
          <span style={{ marginRight: "8px" }}>{text.file_name}</span>
          <span
            className='cursor-pointer'
            onClick={() => {
              handlePreviewFile(value, item);
            }}
          >
            <EyeTwoTone />
          </span>
        </div>
      );
      break;
    case "upload":
      {
        if (!text?.length) {
          return <span> - </span>;
        }
        if (text?.length) {
          return (
            <div>
              <span style={{ marginRight: "8px" }}>
                {text?.map((elem) => elem?.name || elem?.label)}
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  operationalFunction?.handleDownloadFile(value, item);
                }}
              >
                <DownloadOutlined />
              </span>
            </div>
          );
        }
      }
      break;
    case "dropdown": {
      if (!text) {
        return <span>-</span>;
      }
      if (text?.length) {
        return <span>{text?.map((elem) => elem?.label || elem?.name).join(", ")}</span>;
      }
      return <span className={item?.className ?? ""}>{text?.name || text?.label}</span>;
    }
    case "multiSelectDropdown": {
      if (!text || !text.length) {
        return <span>-</span>;
      }
      const cellData = text?.map((elem) => elem?.label || elem?.name).join(", ");
      return (
        <Tooltip
          title={cellData}
          placement={"topLeft"}
          overlayInnerStyle={{ maxHeight: "50vh", overflow: "auto" }}
        >
          <span>{trimString(cellData, 25)}</span>
        </Tooltip>
      );
    }
    case "badge": {
      if (!text) {
        return <span>-</span>;
      }
      return isFinal ? (
        <Badge count={text} className={isFinal ? "final-badge" : ""} />
      ) : (
        <span>{text}</span>
      );
    }
    case "button": {
      return (
        <Button buttonText={item?.buttonText} onClick={operationalFunction?.handleButtonClick} />
      );
    }
    case "text":
    case "textArea": {
      if ([null, "", undefined].includes(text)) {
        return <span>-</span>;
      }
      return <span>{text}</span>;
    }
    case "number": {
      if ([null, "", undefined].includes(text)) {
        return <span> - </span>;
      }
      return <span>{text}</span>;
    }
    case "color": {
      return <CustomControlledInput disabled={true} type='color' value={text} />;
    }
    case "dropdown_with_tooltip": {
      const cellData = text?.length
        ? text?.map((elem) => elem?.label || elem?.name).join(", ")
        : "-";
      return (
        <Tooltip placement={"topLeft"} title={cellData}>
          <span>{cellData}</span>
        </Tooltip>
      );
    }
    case "text_with_tooltip": {
      const cellData = text?.length ? text : "-";
      return (
        <Tooltip
          overlayInnerStyle={{ maxHeight: "50vh", overflow: "auto" }}
          placement={"topLeft"}
          title={cellData}
        >
          <span>{cellData}</span>
        </Tooltip>
      );
    }
    case "salesDropDown": {
      if (!text) {
        return <span>-</span>;
      }
      if (text?.length) {
        return (
          <span>
            {text
              .map((elem) => (elem?.label || elem?.name ? elem?.label || elem?.name : "-"))
              .join(", ")}
          </span>
        );
      }
      return <span>{text?.name || text?.label || "-"}</span>;
    }
    case "redirectionLink": {
      return text ? (
        <>
          <a className={item?.className ?? ""} href={text} target='_blank' rel='noreferrer'>
            {item.title}
          </a>
        </>
      ) : (
        "-"
      );
    }
    case "custom_dropdown":
      if (!text) {
        return <span>-</span>;
      }
      if (text?.length) {
        return <span>{text?.map((elem) => elem?.label || elem?.name).join(", ")}</span>;
      }
      return <span>{text?.name || text?.label}</span>;
  }
};

export default RenderColumnData;