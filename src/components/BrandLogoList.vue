<template>
    <div>
        <em v-if="getIsLoading">Loading brands...</em>
        <span v-if="getError" class="text-danger">ERROR: {{ getError }}</span>
        <ul>
            <li v-for="brand in getBrands" :key="brand.id">{{ brand.brandName }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        created() {
            this.getAll()
        },
        computed: {
            ...mapGetters('brandLogos', ['getBrands', 'getIsLoading', 'getError']),
        },
        methods: {
            ...mapActions('brandLogos', {
                getAll: 'getAllBrands'
            })
        }

    }
</script>
