import classes from "./DependencyTable.module.css";
export const DependencyTable = (props: any) => {
  return (
    <div>
      <div>Dependency Table</div>
      <table className="table-fixed mt-4 w-full text-left ">
        <thead className={` ${classes.dependencyTable}`}>
          <tr>
            <th className="py-2 pl-4">Key</th>
            <th>Dev</th>
            <th>Live</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          <tr className={`${classes.tableRow} py-4 px-4 text-sm`}>
            <td className="py-4 pl-4 font-bold">background-image-1 </td>
            <td className="truncate ... pr-8">
              https://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/image
            </td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
            {/* <td className="text-right">Edite</td> */}
          </tr>
          <tr className={`${classes.tableRow} py-4 px-4 text-sm `}>
            <td className="py-4 pl-4 font-bold ">background-image-1 </td>
            <td className="truncate ... pr-8">
              https://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/image
            </td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
          </tr>
          <tr className={`${classes.tableRow} py-4 px-4 text-sm`}>
            <td className="py-4 pl-4 font-bold">background-image-1 </td>
            <td className="truncate ... pr-8">
              https://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/image
            </td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
