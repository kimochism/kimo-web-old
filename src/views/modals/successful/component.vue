<template>
    <BaseModal>
        <template v-slot:title>Sua mae</template>
        <template v-slot:content>Success</template>
        <template v-slot:footer>Footer</template>
    </BaseModal>
</template>

<script>
import BaseModal from './../component.vue';
export default {
    name: "Successful",
    components: {
        BaseModal
    }
}
</script>

<style>

</style>