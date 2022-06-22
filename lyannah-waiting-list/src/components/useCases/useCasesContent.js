import { Badge } from "../Badge";

export const UseCasesContent = (props) => {
  return (
    <>
      <div className="min-w-max">
        <img src={`../../images/${props.imageName}`} className="block" />
      </div>
      <div className="max-w-md">
        <p className="text-2xl font-bold my-3">{props.title}</p>
        {props.isFuture ? (
          <Badge title="Later Version" />
        ) : (
          <Badge title="BETA" />
        )}

        <p className="my-3">{props.content}</p>
      </div>
    </>
  );
};
