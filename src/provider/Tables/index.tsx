import { ReactNode, createContext, useContext, useState } from "react";
import { useAuth } from "../Auth";
import { mesaCheiaApi } from "../../services/index";

import { Table } from "../../types/table";
import { useEffect } from "react";
interface Data {
  select: string;
  search: string;
}
interface TablesProviderData {
  searchTables: (data: Data) => void;
  listTables: any;
  loading: boolean;
}

interface TablesData {
  children: ReactNode;
}

const TablesProviderContext = createContext<TablesProviderData>(
  {} as TablesProviderData
);

export const TablesProvider = ({ children }: TablesData) => {
  const { token } = useAuth();
  const [listTables, setListTables] = useState([] as Table[]);
  const [loading, setLoading] = useState(false);

  const searchTables = (data: Data) => {
    setLoading(true);
    const { select } = data;
    const { search } = data;

    mesaCheiaApi
      .get(`tables?${select}_like=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setListTables(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getTables = () => {
    setLoading(true);
    mesaCheiaApi
      .get(`tables`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setListTables(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      getTables();
    }
    //eslint-disable-next-line
  }, [token]);

  return (
    <TablesProviderContext.Provider
      value={{ loading, listTables, searchTables }}
    >
      {children}
    </TablesProviderContext.Provider>
  );
};

export const useTables = () => useContext(TablesProviderContext);
