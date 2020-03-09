export default {
  // appelé quand le user essaie de se log
  login: ({ username }) => {
    localStorage.setItem('username', username);
    // accepte toutes les combinaisons de user/pass
    return Promise.resolve();
  },
  // appelé quand le user clique sur logout
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  // appelé quand l'api retourne une erreur
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // appelé quand le user navigue vers une autre location pour valider l'authentification
  checkAuth: () => (localStorage.getItem('username')
    ? Promise.resolve()
    : Promise.reject()),
  // appelé quand le user navigue vers une autre location pour valider les permissions/roles
  getPermissions: () => Promise.resolve(),
};
