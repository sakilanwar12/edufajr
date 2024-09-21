<script setup>
import Header from '@/Components/Backend/Header/Index.vue';
import Footer from '@/Components/Backend/Footer/Index.vue';
import Sidebar from '@/Components/Backend/Sidebar/Index.vue';
</script>

<template>
    <div>
        <Header />
        <Sidebar/>
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
