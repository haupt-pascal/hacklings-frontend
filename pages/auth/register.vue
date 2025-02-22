<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const passwordRequirements = ref({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  specialChar: false,
});

const validatePassword = () => {
  const pwd = password.value;
  passwordRequirements.value.length = pwd.length >= 8;
  passwordRequirements.value.uppercase = /[A-Z]/.test(pwd);
  passwordRequirements.value.lowercase = /[a-z]/.test(pwd);
  passwordRequirements.value.number = /[0-9]/.test(pwd);
  passwordRequirements.value.specialChar = /[!"§$%&/()=]/.test(pwd);
};

const { error: showError } = useToast();

const registerWithEmail = async () => {
  validatePassword();
  if (password.value !== confirmPassword.value) {
    showError("Passwords do not match");
    return;
  }

  if (!Object.values(passwordRequirements.value).every(Boolean)) {
    showError("Passwort entspricht nicht den Anforderungen");
    return;
  }

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

  navigateTo("/auth/pending");
};
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
      <div class="card-body">
        <h1 class="text-3xl font-bold text-center mb-6">Account erstellen</h1>

        <!-- Name Inputs -->
        <div class="flex gap-4">
          <div class="form-control flex-1">
            <label class="label">
              <span class="label-text">Vorname</span>
            </label>
            <input
              type="text"
              v-model="firstName"
              placeholder="Max"
              class="input input-bordered"
            />
          </div>

          <div class="form-control flex-1">
            <label class="label">
              <span class="label-text">Nachname</span>
            </label>
            <input
              type="text"
              v-model="lastName"
              placeholder="Mustermann"
              class="input input-bordered"
            />
          </div>
        </div>

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
            @input="validatePassword"
            placeholder="••••••••"
            class="input input-bordered"
          />
        </div>

        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Passwort bestätigen</span>
          </label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="••••••••"
            class="input input-bordered"
          />
        </div>

        <!-- Password Requirements -->
        <div class="mt-4 bg-base-200 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Passwortanforderungen:</h3>
          <ul class="space-y-1">
            <li class="flex items-center gap-2">
              <Icon
                :name="
                  passwordRequirements.length
                    ? 'heroicons:check-circle'
                    : 'heroicons:x-circle'
                "
                class="w-5 h-5"
                :class="
                  passwordRequirements.length ? 'text-success' : 'text-error'
                "
              />
              Min. 8 Zeichen
            </li>
            <li class="flex items-center gap-2">
              <Icon
                :name="
                  passwordRequirements.uppercase
                    ? 'heroicons:check-circle'
                    : 'heroicons:x-circle'
                "
                class="w-5 h-5"
                :class="
                  passwordRequirements.uppercase ? 'text-success' : 'text-error'
                "
              />
              Min. 1 Grossbuchstabe
            </li>
            <li class="flex items-center gap-2">
              <Icon
                :name="
                  passwordRequirements.lowercase
                    ? 'heroicons:check-circle'
                    : 'heroicons:x-circle'
                "
                class="w-5 h-5"
                :class="
                  passwordRequirements.lowercase ? 'text-success' : 'text-error'
                "
              />
              Min. 1 Kleinbuchstabe
            </li>
            <li class="flex items-center gap-2">
              <Icon
                :name="
                  passwordRequirements.number
                    ? 'heroicons:check-circle'
                    : 'heroicons:x-circle'
                "
                class="w-5 h-5"
                :class="
                  passwordRequirements.number ? 'text-success' : 'text-error'
                "
              />
              Min. 1 Zahl
            </li>
            <li class="flex items-center gap-2">
              <Icon
                :name="
                  passwordRequirements.specialChar
                    ? 'heroicons:check-circle'
                    : 'heroicons:x-circle'
                "
                class="w-5 h-5"
                :class="
                  passwordRequirements.specialChar
                    ? 'text-success'
                    : 'text-error'
                "
              />
              Min. 1 Sonderzeichen (!"§$%&/()=)
            </li>
          </ul>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Submit Button -->
        <div class="form-control mt-6">
          <button class="btn btn-primary" @click="registerWithEmail">
            <Icon name="heroicons:rocket-launch" class="w-5 h-5 mr-2" />
            Los gehts!
          </button>
        </div>

        <!-- Login Link -->
        <div class="text-center mt-6">
          <span class="text-sm">Du hast bereits einen Account?</span>
          <NuxtLink to="/auth/login" class="link link-primary ml-1">
            Hier einloggen
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
