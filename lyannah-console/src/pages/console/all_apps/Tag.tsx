export const Tag = (props: any) => {
  return (

    <div
      className={`p-2  rounded-full inline-block ${
        props.color === "green"
          ? "tag_green"
          : props.color === "blue"
          ? "tag_blue"
          : null
      } `}
    >
      <p className="text-xs">{props.title}</p>

    </div>
  );
};
