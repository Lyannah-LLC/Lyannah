import { UseCasesContent } from "./useCasesContent";
import "./useCases.css";

export const UseCases = (props) => {
  return (
    <div className="">
      <div
        className={`useCasesBoxChild md:flex ${
          props.direction == "forward" ? "flex-row" : "flex-row-reverse"
        } max-w-4xl m-auto justify-around items-center p-10 useCases`}
      >
        <UseCasesContent
          title={props.title}
          content={props.content}
          imageName={props.imageName}
          isFuture={props.isFuture}
        />
      </div>
    </div>
  );
};
