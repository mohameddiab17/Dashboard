import { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { FiDollarSign } from "react-icons/fi";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { RootState } from "../../Store/store";

const Table = () => {
  const { data } = useSelector((state: RootState) => state.table);

  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
  });

  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      global: {
        value: e.target.value,
        matchMode: FilterMatchMode.CONTAINS,
      },
    });
  };

  const globalValue =
    filters.global && "value" in filters.global ? filters.global.value : "";

  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign /> Users Information
        </h3>
        <button className="text-sm text-violet-500 hover:underline">
          See all
        </button>
      </div>

      <InputText
        placeholder="Search..."
        value={globalValue}
        onChange={handleFilterInput}
        className="mb-3"
      />

      <DataTable
        value={data}
        filters={filters}
        paginator
        rows={5}
        className="pt-3"
        emptyMessage="No records found."
      >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="age" header="Age" sortable />
        <Column field="city" header="City" sortable />
      </DataTable>
    </div>
  );
};

export default Table;
