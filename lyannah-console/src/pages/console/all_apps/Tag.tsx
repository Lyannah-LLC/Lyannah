export const Tag = (props: any) => {
  return (
    <div
      className={`px-2 py-1   rounded-full inline-block ${
        props.color === "green"
          ? "bg-lemon-100"
          : props.color === "blue"
          ? "bg-lemon-800"
          : null
      } `}
    >
      <p className="text-xs">{props.title}</p>
    </div>
  );
};
