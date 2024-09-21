import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import { Button } from '@/Components/ui/button'
export default {
  install(app) {
    app.component('Accordion', Accordion);
    app.component('AccordionContent', AccordionContent);
    app.component('AccordionItem', AccordionItem);
    app.component('AccordionTrigger', AccordionTrigger);
    app.component('Avatar', Avatar);
    app.component('AvatarImage', AvatarImage);
    app.component('AvatarFallback', AvatarFallback);
    app.component('Button', Button);
  }
};

