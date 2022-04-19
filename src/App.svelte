<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Login from "./Login.svelte";
  import Mypage from "./Mypage.svelte";
</script>

<Router>
  <Route Path="/" component={Login} />
  <Route path="/mypage" component={Mypage} />
</Router>
