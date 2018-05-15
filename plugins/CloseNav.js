export default ({app}) => {
  /*
   ** Only run on client-side and only in production mode
   */
  app.router.afterEach((to, from) => {
    app.store.commit('toggleNav', false);
  });
};
