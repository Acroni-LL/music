<script>
import Content from "./content.vue";

export default {
  name: "Tabs",
  data() {
    return {
      panes: [],
    };
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: "1",
    },
  },
  methods: {
    onChangeIndex(index) {
      this.$emit("changTab", index);
    },
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content panes={this.panes} />
      </div>
    );
  },
};
</script>

<style scoped>
.tabs {
  background: #fff;
  height: 1000px;
}

.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
