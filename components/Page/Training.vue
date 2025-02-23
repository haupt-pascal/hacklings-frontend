<script setup lang="ts">
const trainings = [
    {
        title: 'Praktikum Polizeiberuf',
        description:
            'Erlebe hautnah den spannenden Polizeialltag! Perfekt für alle, die Interesse an einer Karriere bei der Polizei haben.',
        image: '/images/hannover.jpg',
        from: '2024-01-15',
        to: '2024-01-20',
        department: 'Hannover Raschplatz',
        slots: 10,
    },
    {
        title: 'Praktikum Polizeiberuf',
        description:
            'Einblicke in die Arbeit der Bundespolizei am Hauptbahnhof. Lerne moderne Polizeiarbeit kennen!',
        image: '/images/hannover.jpg',
        from: '2024-02-01',
        to: '2024-02-05',
        department: 'Hannover HBF',
        slots: 4,
    },
    {
        title: 'Praktikum Polizeiberuf',
        description:
            'Spezialeinheiten hautnah erleben: Von der Spurensicherung bis zur Verkehrsüberwachung.',
        image: '/images/hannover.jpg',
        from: '2024-03-10',
        to: '2024-03-15',
        department: 'Hannover Raschplatz',
        slots: 5,
    },
]
</script>
<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div class="container mx-auto px-4 py-12">
            <h1
                class="text-5xl font-light mb-12 text-center tracking-wide text-slate-800"
            >
                Polizei-Praktikum
            </h1>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="training in trainings"
                    :key="training.title"
                    class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-slate-100"
                >
                    <figure>
                        <img
                            :src="training.image"
                            class="h-40 w-full object-cover"
                            :alt="training.title"
                        />
                    </figure>
                    <div class="card-body p-6">
                        <h2
                            class="card-title text-xl font-medium text-slate-800 mb-2"
                        >
                            {{ training.title }}
                        </h2>
                        <div class="text-sm space-y-3 text-slate-600">
                            <p>{{ training.description }}</p>
                            <div class="flex items-center gap-2 text-sm">
                                <span>📍</span>
                                {{ training.department }}
                            </div>
                            <div class="flex items-center gap-1 text-sm">
                                <span>📅</span>
                                {{
                                    new Date(training.from).toLocaleDateString(
                                        'de-DE'
                                    )
                                }}
                                -
                                {{
                                    new Date(training.from).toLocaleDateString(
                                        'de-DE'
                                    )
                                }}
                            </div>
                            <div
                                class="badge bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                            >
                                {{ training.slots }} Plätze
                            </div>
                        </div>
                        <div class="card-actions justify-end mt-6">
                            <button
                                class="px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors duration-200 text-sm font-medium"
                            >
                                Bewerben
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
