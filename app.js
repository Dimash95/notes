const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type new note",
      },
      notes: ["note 1", "note 2", "note 3"],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = "";
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
