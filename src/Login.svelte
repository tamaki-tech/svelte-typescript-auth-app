<script lang="ts">
  import { navigate } from "svelte-routing";
  import { signInWithPopup } from "firebase/auth";
  import { auth, provider } from "./firebase";
  import { authStore } from "./store";

  async function handleLoginWithGoogle() {
    await signInWithPopup(auth, provider)
      .then((res) => {
        authStore.set({ ...$authStore, loggedIn: true, user: res.user });
        navigate("mypage");
      })
      .catch((e) => {
        console.log(e);
      });
  }
</script>

<div>
  <button type="button" on:click={handleLoginWithGoogle}>
    Sign In with Google
  </button>
</div>
