<script setup lang="ts">
definePageMeta({
  layout: "page-default",
});
</script>
<template>
  <NuxtLayout>
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="card">
        <div class="card-body prose max-w-none">
          <h1 class="card-title text-3xl mb-8">Legal Notice</h1>

          <!-- Information according to § 5 TMG -->
          <section class="mb-8">
            <h2 class="text-2xl mb-4">Information according to § 5 TMG</h2>
            <div class="space-y-2">
              <p><strong>Business:</strong> Pascal Haupt Einzelunternehmen</p>
              <p><strong>Owner:</strong> Pascal Haupt</p>
              <p>
                <strong>Address:</strong> Berliner Ring 12, 31303 Burgdorf,
                Lower Saxony, Germany
              </p>
            </div>
          </section>

          <!-- Contact Information -->
          <section class="mb-8">
            <h2 class="text-2xl mb-4">Contact</h2>
            <div class="space-y-2">
              <p><span class="font-semibold">Phone:</span> Not provided</p>
              <p>
                <span class="font-semibold">Email:</span> pascal@versapost.com
              </p>
            </div>
          </section>

          <!-- Disclaimer -->
          <section class="mb-8">
            <h2 class="text-2xl mb-4">Disclaimer</h2>
            <p>
              Despite careful content control, we assume no liability for the
              content of external links. The operators of the linked pages are
              solely responsible for their content.
            </p>
          </section>

          <!-- Data Protection -->
          <section class="mb-8">
            <h2 class="text-2xl mb-4">Data Protection</h2>
            <p>
              No significant personal data is collected. A detailed privacy
              policy is currently not required as no identifying data is being
              collected.
            </p>
          </section>

          <!-- Footer -->
          <footer class="mt-8 pt-4 border-t border-base-300">
            <p class="text-sm text-base-content/70">
              Last updated: December 2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
