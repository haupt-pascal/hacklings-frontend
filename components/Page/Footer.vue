<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
    {
        title: 'Produkt',
        items: [
            { label: 'Dummy', url: '/' },
            { label: 'Dummy', url: '/' },
            { label: 'Dummy', url: '/' },
        ],
    },
    {
        title: 'Unternehmen',
        items: [
            { label: 'Dummy', url: '/abou' },
            { label: 'Dummy', url: '/' },
            { label: 'Dummy', url: '/' },
        ],
    },
    {
        title: 'Rechtliches',
        items: [
            { label: 'AGB', url: '/legal/terms-of-service' },
            { label: 'Datenschutz', url: '/legal/privacy-policy' },
            { label: 'Impressum', url: '/legal/imprint' },
        ],
    },
]

const socialLinks = [
    { icon: 'fa-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
]
</script>

<template>
    <footer
        class="footer footer-center p-10 bg-base-100 text-base-content rounded-xl shadow-lg mt-12"
    >
        <!-- Links Section -->
        <div class="grid grid-flow-col gap-12">
            <div
                v-for="section in footerLinks"
                :key="section.title"
                class="flex flex-col items-center"
            >
                <span class="footer-title text-primary opacity-100">{{
                    section.title
                }}</span>
                <div class="flex flex-col gap-2">
                    <NuxtLink
                        v-for="item in section.items"
                        :key="item.label"
                        :to="item.url"
                        class="link link-hover hover:text-primary transition-colors"
                    >
                        {{ item.label }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Social Links -->
        <div>
            <div class="grid grid-flow-col gap-4">
                <a
                    v-for="social in socialLinks"
                    :key="social.label"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-ghost btn-square hover:text-primary transition-colors"
                    :aria-label="social.label"
                >
                    <i :class="['fas', social.icon, 'text-xl']"></i>
                </a>
            </div>
        </div>

        <!-- Copyright -->
        <div class="text-sm">
            <p>Copyright © {{ currentYear }} - Alle Rechte vorbehalten</p>
        </div>
    </footer>
</template>
