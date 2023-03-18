const api = {
  get() {
    return Promise.resolve({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });
  },
};

export default api;
