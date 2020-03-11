import decodeJwt from 'jwt-decode';

export default {
  // appelé quand le user essaie de se log
  login: ({ username, password }) => {
    const request = new Request('http://localhost:5001/authenticate', {
      method: 'POST',
      cors: true,
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token, permissions }) => {
        const decodedToken = decodeJwt(token);
        localStorage.setItem('token', token);
        localStorage.setItem('permissions', permissions);
      });
  },
  // appelé quand le user clique sur logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
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
  checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),

  // appelé quand le user navigue vers une autre location pour valider les permissions/roles
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    console.log(role);
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
