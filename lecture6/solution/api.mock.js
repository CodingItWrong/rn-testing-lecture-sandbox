const api = {
  get() {
    return Promise.resolve({
      data: [
        {id: 1, name: 'Restaurant 1'},
        {id: 2, name: 'Restaurant 2'},
      ],
    });
  },
};

export default api;
