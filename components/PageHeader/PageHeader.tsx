type Props = {
  title: string;
  number: number;
};

const PageHeader = (props: Props) => {
  return (
    <div className="PageHeader">
      <h3 className="Number">{props.number.toFixed(0).padStart(2, "0")}. </h3>
      <h3 className="Title">{props.title}</h3>
      <hr className="Line" />
    </div>
  );
};

export default PageHeader;
