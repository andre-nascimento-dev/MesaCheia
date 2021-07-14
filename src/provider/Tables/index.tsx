import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useAuth } from "../Auth";
import { useUser } from "../User";
import { mesaCheiaApi } from "../../services/index";
import { Table } from "../../types/table";
import { showToast } from "../../components/Toast";

interface Data {
  select: string;
  search: string;
}

interface EditInfo {
  name?: string;
  avatar?: string;
  system?: string;
  theme?: string;
  discord?: string;
}

interface TablesProviderData {
  createTable: (data: Table) => void;
  searchTables: (data: Data) => void;
  deleteTable: (id: number) => void;
  leaveTable: (table: Table, userId: number) => void;
  editTableInfo: (id: number, data: EditInfo) => void;
  editTableMembers: (table: Table, playerId: number) => void;
  getActualTable: (id: number) => void;
  actualTable: Table;
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
  const { userTables, masterTables } = useUser();
  const [listTables, setListTables] = useState([] as Table[]);
  const [loading, setLoading] = useState(false);
  const [actualTable, setActualTable] = useState({} as Table);

  const getActualTable = (id: number) => {
    setLoading(true);
    mesaCheiaApi
      .get(`/tables/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActualTable(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const createTable = (data: Table) => {
    mesaCheiaApi
      .post("/tables", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        showToast({ type: "info", message: "Que comecem os jogos!" });
        userTables();
        masterTables();
      })
      .catch((error) => console.log(error));
  };

  const deleteTable = (id?: number) => {
    mesaCheiaApi
      .delete(`/tables/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        userTables();
        masterTables();
      })
      .catch((error) => console.log(error));
  };

  const leaveTable = (table: Table, userId: number) => {
    const isMaster = table.players.find(
      (player) => player.playerId === userId
    )?.isMaster;
    const players = table.players.filter(
      (player) => player.playerId !== userId
    );
    let updatedTable = {};

    if (isMaster) {
      updatedTable = {
        needMaster: true,
        masterId: null,
        isFull: false,
        players: players,
      };
    } else {
      updatedTable = {
        isFull: false,
        players: players,
      };
    }

    mesaCheiaApi
      .patch(`/tables/${table.id}`, updatedTable, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        userTables();
        masterTables();
      })
      .catch((error) => console.log(error));
  };

  const editTableInfo = (id: number, data: EditInfo) => {
    mesaCheiaApi
      .patch(`/tables/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getActualTable(id);
        userTables();
        masterTables();
      })
      .catch((error) => console.log(error));
  };

  const editTableMembers = (table: Table, playerId: number) => {
    const isMaster = table.players.find(
      (player) => player.playerId === playerId
    )?.isMaster;

    const newPlayers = table.players.filter(
      (player) => player.playerId !== playerId
    );

    let updatedTable = {};

    if (isMaster) {
      updatedTable = {
        needMaster: true,
        masterId: null,
        isFull: false,
        players: newPlayers,
      };
    } else {
      updatedTable = {
        isFull: false,
        players: newPlayers,
      };
    }

    mesaCheiaApi
      .patch(`/tables/${table.id}`, updatedTable, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getActualTable(Number(table.id));
        userTables();
        masterTables();
      })
      .catch((error) => console.log(error));
  };

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
      value={{
        loading,
        listTables,
        searchTables,
        createTable,
        deleteTable,
        leaveTable,
        editTableInfo,
        editTableMembers,
        actualTable,
        getActualTable,
      }}
    >
      {children}
    </TablesProviderContext.Provider>
  );
};

export const useTables = () => useContext(TablesProviderContext);
