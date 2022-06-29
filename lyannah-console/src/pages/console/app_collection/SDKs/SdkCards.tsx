import { Tag } from "../../all_apps/Tag";
import css from "./SDKs.module.css";

export const SDKCards = (props: any) => {
  return (
    <div
      className={`${css.sdk_card} flex flex-col inline-block w-max py-6 px-10  bg-blue-50 rounded-3xl`}
    >
      {/* <div className="p-6 bg-blue-50 inline-block"> */}
      <div className="">
        <img src={props.logoUrl} className="w-20"></img>
        {/* </div> */}
      </div>
      <div className="mx-auto my-2">
        <Tag
          title={props.tagTitle}
          className="flex-grow-0 "
          color={props.color}
        />
      </div>
      <p className="mx-auto ">{props.title}</p>
    </div>
  );
};
