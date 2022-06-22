import { UseCases } from "./useCases/useCases";

export const ReturnUseCases = () => {
  return (
    <>
      <UseCases
        direction="forward"
        imageName="security.svg"
        title="Manage Enviroment Variables"
        content={`Lyannah offers you a ${"staging and production"} environment where you can manage environment variables at any point during development.`}
      />
      <UseCases
        direction="backward"
        imageName="gaming.svg"
        title="Make Live Changes"
        content="You can manage dynamic resources such as image links, text-write ups, booleans, background colors etc. and update them dynamically, even when your app is live."
      />
      <UseCases
        isFuture={true}
        direction="forward"
        imageName="code.svg"
        title="Analytics"
        content="Monitor app usage and performance during development and in production."
      />
      <UseCases
        direction="backward"
        imageName="resource.svg"
        title="Speed up development time"
        content="Make development faster and easier by having all your resources and environment variables in one place, where they can be updated at any time without having to rebuild."
      />
      <UseCases
        direction="forward"
        imageName="you.svg"
        title="It is all left to you!"
        content="Get creative with your code and enjoy updating your app in record time."
      />
    </>
  );
};
