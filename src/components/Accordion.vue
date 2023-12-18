<script setup lang="ts">
    import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
    import { Icon } from '@iconify/vue'
    import { accordion as accordionTheme } from "@tailus/themer-accordion";

    const accordionItems = [
        {
            id:"item-1",
            question: "What is Tailus Themer?",
            answer: "Tailus Themer is a versatile theming library designed to help you create modern and custom web User Interfaces with Tailwind CSS."
        },
        {
            id:"item-2",
            question: "What are the supported frameworks?",
            answer: "Tailus Themer is framework-agnostic and can be used with any front-end framework that supports Tailwind CSS, such as React, Vue, Angular, and others."
        },
        {
            id:"item-3",
            question: "Is it customizable?",
            answer: "Yes, Tailus Themer is highly customizable. It allows you to customize all aspects of your theme, including colors, typography, and more. You can also export your theme configuration to use in other projects."
        }
    ]
</script>

<template>
    <AccordionRoot
        default-value="'item-1'"
        type="single"
        :collapsible="true"
        class="max-w-md mx-auto w-full"
    >
        <template v-for="item in accordionItems" :key="item.id">
            <AccordionItem :class="accordionTheme.item" :value="item.id">
                <AccordionHeader>
                    <AccordionTrigger :class="accordionTheme.trigger.parent"> 
                        <span>{{ item.question }}</span>
                        <Icon
                            icon="radix-icons:chevron-down"
                            :class="accordionTheme.trigger.icon"
                            aria-hidden
                        />
                    </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent :class="accordionTheme.content">
                    <div class="pb-5">
                        <p>{{ item.answer }}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </template>
  </AccordionRoot>
</template>