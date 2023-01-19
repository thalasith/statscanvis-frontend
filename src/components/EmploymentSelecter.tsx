import Selecter from "./Selecter";
import { EMPLOYEE_TYPES, END_DATE, GEOGRAPHIES, START_DATE } from "../consts";

const EmploymentSelecter = (props: {
  employeeType: string;
  setEmployeeType: (value: string) => void;
  geography: string;
  setGeography: (value: string) => void;
  startDate: string;
  changeStartDate: (value: string) => void;
  endDate: string;
  changeEndDate: (value: string) => void;
  error: string;
  setError: (value: string) => void;
}) => {
  return (
    <div className="mx-2 w-1/2 bg-gray-200 sm:p-6">
      <div className="grid-rows row-span-3 grid">
        <div className="mb-4">
          <Selecter
            options={EMPLOYEE_TYPES}
            value={props.employeeType}
            onChange={props.setEmployeeType}
            name="employeeType"
          />
        </div>

        <div className="mb-4">
          <Selecter
            options={GEOGRAPHIES}
            value={props.geography}
            onChange={props.setGeography}
            name="geography"
          />
        </div>
        <div className="flex flex-row">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <select
              id="startDate"
              name="startDate"
              onChange={(e) => {
                props.changeStartDate(e.target.value);
              }}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {START_DATE.map((option) => (
                <option
                  value={option.value}
                  key={option.value}
                  selected={option.selected}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mr-2 w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <select
              id="endDate"
              name="endDate"
              onChange={(e) => {
                props.changeEndDate(e.target.value);
              }}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {END_DATE.map((option) => (
                <option
                  value={option.value}
                  key={option.value}
                  selected={option.selected}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentSelecter;
