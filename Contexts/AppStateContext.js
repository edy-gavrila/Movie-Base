import React from "react";

const defaultAppStateContext = {
  selectedMenuItemIndex: 0,
  isDetailsModalVisible: false,
  onSetSlectedMenuItemIndex: () => {},
  onShowDetailsModal: () => {},
  onHideDetailsModal: () => {},
};

const AppStateContext = React.createContext({ ...defaultAppStateContext });

export { AppStateContext, defaultAppStateContext };
