const EmploymentSelector = (props: {
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
          <label
            htmlFor="employeeType"
            className="block text-sm font-medium text-gray-700"
          >
            Employee Type
          </label>
          <select
            id="employeeType"
            name="employeeType"
            value={props.employeeType}
            onChange={(e) => {
              props.setEmployeeType(e.target.value);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option>All employees</option>
            <option>Employees paid by the hour</option>
            <option>Salaried employees paid a fixed salary</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="geography"
            className="block text-sm font-medium text-gray-700"
          >
            Geography
          </label>
          <select
            id="geography"
            name="geography"
            value={props.geography}
            onChange={(e) => {
              props.setGeography(e.target.value);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option> Canada </option>
            <option> Newfoundland and Labrador </option>
            <option> Prince Edward Island </option>
            <option> Nova Scotia </option>
            <option> New Brunswick </option>
            <option> Quebec </option>
            <option> Ontario </option>
            <option> Manitoba </option>
            <option> Saskatchewan </option>
            <option> Alberta </option>
            <option> British Columbia </option>
            <option> Yukon </option>
            <option> Northwest Territories </option>
            <option> Nunavut </option>
          </select>
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
              <option value="January 1, 2022" selected>
                January 2022
              </option>
              <option value="February 1, 2022">February 2022</option>
              <option value="March 1, 2022">March 2022</option>
              <option value="April 1, 2022">April 2022</option>
              <option value="May 1, 2022">May 2022</option>
              <option value="June 1, 2022">June 2022</option>
              <option value="July 1, 2022">July 2022</option>
              <option value="August 1, 2022">August 2022</option>
              <option value="September 1, 2022">September 2022</option>
              <option value="October 1, 2022">October 2022</option>
              <option value="November 1, 2022">November 2022</option>
              <option value="December 1, 2022">December 2022</option>
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
              <option value="January 31, 2022">January 2022</option>
              <option value="February 28, 2022">February 2022</option>
              <option value="March 31, 2022">March 2022</option>
              <option value="April 30, 2022">April 2022</option>
              <option value="May 31, 2022">May 2022</option>
              <option value="June 30, 2022">June 2022</option>
              <option value="July 31, 2022">July 2022</option>
              <option value="August 31, 2022">August 2022</option>
              <option value="September 30, 2022">September 2022</option>
              <option value="October 31, 2022">October 2022</option>
              <option value="November 30, 2022">November 2022</option>
              <option value="December 31, 2022" selected>
                December 2022
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentSelector;
