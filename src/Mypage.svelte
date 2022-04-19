<script>
  import { navigate } from "svelte-routing";
  import { auth } from "./firebase";
  import { authStore } from "./store";

  function handleLogout() {
    auth.signOut();
    navigate("/");
  }
</script>

<h1>Login successed.</h1>
{#if $authStore.loggedIn}
  <ul>
    <li>email: {$authStore.user.email}</li>
    <li>name: {$authStore.user.displayName}</li>
  </ul>
  <button type="button" on:click={handleLogout}> Logout </button>
{/if}
