import { defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  setup() {
    return () => (
      <header class="le-header">
        <div class="header-log">111</div>
      </header>
    );
  }
});
