import classes from "./DependencyTable.module.css";
export const DependencyTable = (props: any) => {
  return (
    <div>
      <div className="text-white">Dependency Table</div>
      <table className="table-fixed mt-4 w-full text-left ">
        <thead className={` ${classes.dependencyTable} bg-grey-900`}>
          <tr className="text-grey-500">
            <th className="py-2 pl-4">Key</th>
            <th>Dev</th>
            <th>Live</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody className="text-white">
          <tr
            className={`${classes.tableRow} py-4 px-4 text-[.8rem]`}
            onClick={props.onClick}
          >
            <td className="py-4 pl-4 font-bold">background-image-1 </td>
            <td className="truncate ... pr-8">
              https://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/imagehttps://www.pixabay.com/image
            </td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
            {/* <td className="text-right">Edit</td> */}
          </tr>
          <tr className={`${classes.tableRow} py-4 px-4 text-sm text-[.8rem]`}>
            <td className="py-4 pl-4 font-bold ">Next-feature </td>
            <td className="truncate ... pr-8">hoskeen</td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
          </tr>
          <tr className={`${classes.tableRow} py-4 px-4 text-sm text-[.8rem]`}>
            <td className="py-4 pl-4 font-bold">Token </td>
            <td className="truncate ... pr-8">true</td>
            <td className="text-ellipsis">https://www.pixabay.com/image</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
