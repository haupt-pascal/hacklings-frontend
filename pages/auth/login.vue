<script setup lang="ts">
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const { error: showError } = useToast();

const loginWithEmail = async () => {
    /*
  const { data, error } = await client.auth.signUp({
     * This logic needs to be implemented!!
  });

  if (error) {
    console.error("Error registering with email:", error);
    showError(error.message);
    return;
  }
     */

    navigateTo("/app/dashboard");
};
</script>

<template>
    <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
        <div class="card w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
            <div class="card-body">
                <h1 class="text-3xl font-bold text-center mb-6">Anmeldung</h1>

                <!-- Email Input -->
                <div class="form-control mt-4">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        v-model="email"
                        placeholder="max@mustermann.de"
                        class="input input-bordered"
                    />
                </div>

                <!-- Password Inputs -->
                <div class="form-control mt-4">
                    <label class="label">
                        <span class="label-text">Passwort</span>
                    </label>
                    <input
                        type="password"
                        v-model="password"
                        placeholder="••••••••"
                        class="input input-bordered"
                    />
                </div>

                <!-- Submit Button -->
                <div class="form-control mt-6">
                    <button class="btn btn-primary" @click="loginWithEmail">
                        <Icon
                            name="heroicons:rocket-launch"
                            class="w-5 h-5 mr-2"
                        />
                        Los gehts!
                    </button>
                </div>

                <!-- Login Link -->
                <div class="text-center mt-6">
                    <span class="text-sm"
                        >Du hast dein Kennwort vergessen?</span
                    >
                    <NuxtLink to="/auth/reset" class="link link-primary ml-1">
                        Hier zurücksetzen
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
