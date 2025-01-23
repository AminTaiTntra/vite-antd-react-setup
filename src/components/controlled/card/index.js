import { Card } from 'antd';

const CustomCard = ({ title, extra, bordered, children, className }) => {
  return (
    <Card
      title={title}
      extra={extra}
      bordered={bordered}
      className={className}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
