const loginToGestMode = () => {
  const existingData = getExistingLocalStorageData();
  if (!existingData) {
    initGuestModeLocalStorage();
    existingData = getExistingLocalStorageData();
  }
  setLocalStorageData({ ...existingData, isLoggedInAsGuest: true });
};

const logoutFromGuestMode = () => {
  const existingData = getExistingLocalStorageData();
  if (!existingData) {
    return;
  } else {
    setLocalStorageData({ ...existingData, isLoggedInAsGuest: false });
  }
};

const isLoggedInAsGuest = () => {
  const existingData = getExistingLocalStorageData();
  if (existingData && existingData.isLoggedInAsGuest === true) {
    return true;
  } else {
    return false;
  }
};

const initGuestModeLocalStorage = (data) => {
  localStorage.setItem(
    "movie-app-guest",
    JSON.stringify({ isLoggedInAsGuest: false, lists: {} })
  );
};

const getExistingLocalStorageData = () => {
  const existingLocalStorageData = localStorage.getItem("movie-app-guest");
  if (!existingLocalStorageData) {
    return null;
  } else {
    return JSON.parse(existingLocalStorageData);
  }
};

const setLocalStorageData = (data) => {
  localStorage.setItem("movie-app-guest", JSON.stringify(data));
};

export { logoutFromGuestMode, loginToGestMode, isLoggedInAsGuest };
