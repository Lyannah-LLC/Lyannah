import { ConsoleWrapper } from "../../../../components/console_wrapper/ConsoleWrapper";
import { SDKCards } from "./SdkCards";

export const SDKsView = ({ logoUrl }) => {
  return (
    <>
      <ConsoleWrapper>
        <p className="text-3xl font-bold">SDKs</p>
        <div className="flex row gap-8 mt-6 flex-wrap">
          <SDKCards
            logoUrl="../images/flutter.svg"
            title="Flutter"
            tagTitle="Available"
            color="green"
          />
          <SDKCards
            logoUrl="../images/React.svg"
            title="React"
            tagTitle="Available"
            color="green"
          />
          <SDKCards
            logoUrl="../images/vue.svg"
            title="Vue"
            tagTitle="coming soon"
            color="blue"
          />
          <SDKCards
            logoUrl="../images/c-sharp.svg"
            title="C Sharp"
            tagTitle="coming soon"
            color="blue"
          />

          <SDKCards
            logoUrl="../images/kotlin.svg"
            title="Kotlin"
            tagTitle="coming soon"
            color="blue"
          />
          <SDKCards
            logoUrl="../images/angular.svg"
            title="C Sharp"
            tagTitle="Angular"
            color="blue"
          />
          <SDKCards
            logoUrl="../images/java.svg"
            title="Java"
            tagTitle="coming soon"
            color="blue"
          />
        </div>
      </ConsoleWrapper>
    </>
  );
};
