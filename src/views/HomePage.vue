<template>
    <div>
        <h1 v-if="getUsername">Hi {{ getUsername }}!</h1>
        <brand-logo-list></brand-logo-list>
        <router-link to="/login">Logout</router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BrandLogoList from '../components/BrandLogoList';

    export default {
        components: { BrandLogoList },
        computed: {
            ...mapGetters('account', ['getUsername']),
        }
    }
</script>
