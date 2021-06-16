export const checkLoggedIn = () => !!sessionStorage.getItem("token");

export const clearToken = () => sessionStorage.removeItem("token");
