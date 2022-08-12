import Transfer from './Transfer';

const components = {
  Transfer,
};

export default {
  install(app) {
    app.component('Transfer', Transfer);
  },
};
