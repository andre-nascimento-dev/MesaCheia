import { ReactNode, createContext, useContext, useState } from "react";
import { useAuth } from "../Auth";
import { useUser } from "../User";
import { mesaCheiaApi } from "../../services/index";
import { Player, Table } from "../../types/table";
import { showToast } from "../../components/Toast";
import { User } from "../../types/user";

interface SearchData {
  category: string;
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
  searchTables: (data: SearchData, needMaster: boolean) => void;
  deleteTable: (id: number) => void;
  leaveTable: (table: Table, userId: number) => void;
  editTableInfo: (id: number, data: EditInfo) => void;
  editTableMembers: (table: Table, playerId: number) => void;
  getActualTable: (id: number) => void;
  actualTable: Table;
  listTables: Table[];
  joinTable: (table: Table, user: User, asMaster: boolean) => void;
  loading: boolean;
  modalLoading: boolean;
  getNeedPlayersTables: () => void;
  getNeedMasterTables: () => void;
}

interface TablesData {
  children: ReactNode;
}

const TablesProviderContext = createContext<TablesProviderData>(
  {} as TablesProviderData
);

export const TablesProvider = ({ children }: TablesData) => {
  const { token } = useAuth();
  const { user } = useUser();
  const { userTables, masterTables } = useUser();
  const [listTables, setListTables] = useState([] as Table[]);
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [actualTable, setActualTable] = useState({} as Table);

  const getActualTable = (id: number) => {
    setModalLoading(true);
    mesaCheiaApi
      .get(`/tables/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActualTable(response.data);
        setModalLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setModalLoading(false);
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

  const searchTables = (data: SearchData, needMaster: boolean) => {
    setLoading(true);
    const { category, search } = data;

    mesaCheiaApi
      .get(`tables?${category}_like=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (needMaster) {
          setListTables(
            response.data.filter(
              (table: Table) =>
                table.needMaster === true &&
                table.players.every(
                  (player: Player) => player.playerId !== user.id
                )
            )
          );
        } else {
          setListTables(
            response.data.filter((table: Table) =>
              table.players.every(
                (player: Player) => player.playerId !== user.id
              )
            )
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getNeedPlayersTables = () => {
    setLoading(true);
    mesaCheiaApi
      .get("/tables?isFull=false", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListTables(
          response.data.filter((table: Table) =>
            table.players.every((player: Player) => player.playerId !== user.id)
          )
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const getNeedMasterTables = () => {
    setLoading(true);
    mesaCheiaApi
      .get("/tables?isFull=false&needMaster=true", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListTables(
          response.data.filter((table: Table) =>
            table.players.every((player: Player) => player.playerId !== user.id)
          )
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const joinTable = (table: Table, user: User, asMaster: boolean) => {
    let data = {};

    if (asMaster) {
      data = {
        needMaster: false,
        masterId: user.id,
        isFull: table.players.length + 1 === table.total ? true : false,
        players: [
          ...table.players,
          {
            username: user.username,
            avatar: user.avatar,
            isMaster: true,
            playerId: user.id,
          },
        ],
      };
    } else {
      data = {
        isFull: table.players.length + 1 === table.total ? true : false,
        players: [
          ...table.players,
          {
            username: user.username,
            avatar: user.avatar,
            isMaster: false,
            playerId: user.id,
          },
        ],
      };
    }
    mesaCheiaApi
      .patch(`tables/${table.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        showToast({ type: "info", message: "Que comecem os jogos!" });
        if (asMaster) {
          getNeedMasterTables();
        } else {
          getNeedPlayersTables();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        modalLoading,
        joinTable,
        getNeedPlayersTables,
        getNeedMasterTables,
      }}
    >
      {children}
    </TablesProviderContext.Provider>
  );
};

export const useTables = () => useContext(TablesProviderContext);
