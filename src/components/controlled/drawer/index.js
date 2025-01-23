import { Drawer } from "antd";

const CustomDrawer = ({
  children,
  title,
  placement,
  open,
  className,
  width,
  closeIcon,
  size,
  onClose = () => { },
  footer,
}) => {
  return (
    <Drawer
      open={open}
      placement={placement}
      title={title}
      width={width}
      className={className}
      closeIcon={closeIcon}
      size={size}
      onClose={onClose}
      footer={footer}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
