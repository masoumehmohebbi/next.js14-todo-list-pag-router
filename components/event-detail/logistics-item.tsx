function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li>
      <span>
        <Icon />
      </span>
      <span>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
