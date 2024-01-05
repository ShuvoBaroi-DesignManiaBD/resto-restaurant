
const TableId = ({ text, icon, secondsToDate }) => {
    return (
        <td className="h-px whitespace-nowrap">
            <div className="flex justify-center px-6 py-3 text-center">
                <span className="flex gap-3 text-center justfy-center items-center text-sm font-medium text-text dark:text-gray-200">
                    {icon && icon}
                    {text && text}
                    {secondsToDate && secondsToDate()}
                </span>

            </div>
        </td>
    );
};

export default TableId;