export const DeleteDependency = () => {
  return (
    <div className="p-4 rounded-[5px] border border-red-700 bg-red-950">
      <p className="text-sm text-red-300 font-bold">Delete Dependency ?</p>
      <p className="text-ss mt-4  ">
        Deleting this dependency will cause your app to behave in unexpected
        ways
      </p>
    </div>
  );
};
