import Select from "react-select";
const SelectField = ({ options, onChange,  placeholder}) => {
  return (
    <Select
      unstyled
      placeholder={placeholder}
      className={`bg-white xl:col-span-2 rounded-xl w-[300px] md:w-[350px] xl:w-[250px] 2xl:w-[300px]`}
      options={options}
      classNames={{
        control: () => "px-2 p-3 h-[50px] border border-gray-400 rounded-xl",
        menuList: () => "bg-white mt-1 w-[400px] z-10 py-3 rounded-xl  border border-gray-400",
        option: () => "hover:bg-primary hover:text-white py-2 px-2 rounded-sm transition-all ",
        dropdownIndicator: () => "text-[#114d59]",
        placeholder: () => "text-gray-400 select-none"
      }}
      onChange={onChange}
    />
  );
};

export default SelectField;
