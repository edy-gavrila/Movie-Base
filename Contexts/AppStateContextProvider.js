import React, { useCallback, useState } from "react";
import { AppStateContext, defaultAppStateContext } from "./AppStateContext";

function AppStateContextProvider({ children }) {
  const [appState, setAppState] = useState({ ...defaultAppStateContext });

  const onSetSlectedMenuItemIndex = useCallback((menuItemIndex = 0) => {
    setAppState((prevState) => ({
      ...prevState,
      selectedMenuItemIndex: menuItemIndex,
    }));
  }, []);

  const onShowDetailsModal = useCallback(() => {
    setAppState((prevState) => ({ ...prevState, isDetailsModalVisible: true }));
  }, []);

  const onHideDetailsModal = useCallback(() => {
    setAppState((prevState) => ({
      ...prevState,
      isDetailsModalVisible: false,
    }));
  }, []);
  return (
    <AppStateContext.Provider
      value={{
        ...appState,
        onSetSlectedMenuItemIndex,
        onShowDetailsModal,
        onHideDetailsModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export default AppStateContextProvider;
