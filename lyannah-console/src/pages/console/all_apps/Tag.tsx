export const Tag = (props: any) => {
  return (
    <div
      className={`px-2 py-1   rounded-full inline-block ${
        props.color === "green"
          ? "bg-lemon-faded"
          : props.color === "blue"
          ? "bg-iris-faded"
          : null
      } `}
    >
      <p
        className={` text-ss ${
          props.color === "green"
            ? "text-lemon-100"
            : props.color === "blue"
            ? "text-iris-350"
            : null
        } `}
      >
        {props.title}
      </p>
    </div>
  );
};
