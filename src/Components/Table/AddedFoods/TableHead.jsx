
const TableHead = ({labels}) => {
    return (
        <thead className="w-full bg-gray-50 dark:bg-slate-800">
                <tr className="">
                  <th scope="col" className="ps-6 py-3 text-start">
                    <label
                      htmlFor="hs-at-with-checkboxes-main"
                      className="flex"
                    >
                      <input
                        type="checkbox"
                        className="shrink-0 border-gray-300 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-at-with-checkboxes-main"
                      />
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </th>
                  {labels.map(label => {
                   return <th key={Math.random()}
                    scope="col"
                    className="ps-6 lg:ps-3  pe-6 py-3"
                  >
                    <div className="flex justify-center items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        {label}
                      </span>
                    </div>
                  </th>
                  })}
                </tr>
              </thead>
    );
};

export default TableHead;