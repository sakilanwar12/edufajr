<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { AlignJustify } from 'lucide-vue-next';

</script>

<template>
    <header>
        <div class="flex">
            <div class="flex-none">
                <ApplicationLogo />
                <Button>
                    <AlignJustify />
                </Button>
              
            </div>
            <div class="flex-1">

                <div>
                    <Avatar>
                        <AvatarImage/>
                        <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
       
    </header>
</template>
