<script setup lang="ts">
const firstName = "Beispiel";
const lastName = "Name";
const email = "beispiel.name@email.com";
const department = "Beispiel-Department";

function deleteAccount() {
  console.log("Account deleted");
}
</script>
<template>
  <div>
    <AppNavigation />
    <div class="min-h-screen p-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-center">Profil</h1>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="grid grid-cols-1 gap-8">
              <div>
                <h2 class="card-title mb-4">Persönliche Informationen</h2>
                <div class="space-y-4">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Vorname</span>
                    </label>
                    <input
                      type="text"
                      v-model="firstName"
                      class="input input-bordered input-disabled bg-base-200"
                      readonly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Nachname</span>
                    </label>
                    <input
                      type="text"
                      v-model="lastName"
                      class="input input-bordered input-disabled bg-base-200"
                      readonly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">E-Mail</span>
                    </label>
                    <input
                      type="email"
                      v-model="email"
                      class="input input-bordered input-disabled bg-base-200"
                      readonly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Abteilung</span>
                    </label>
                    <input
                      type="text"
                      v-model="department"
                      class="input input-bordered input-disabled bg-base-200"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="space-y-4 mt-4">
                  <button
                    @click="deleteAccount"
                    class="btn btn-error btn-outline w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Account löschen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
