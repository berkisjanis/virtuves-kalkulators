import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'Cik gramu ir glāzē miltu?',
    a: 'Vienā standarta glāzē (250 ml) ietilpst aptuveni 160 gramu kviešu miltu. Tas ir mazāk nekā cukura vai sāls, jo milti ir vieglāki un irdeni.',
  },
  {
    q: 'Cik gramu ir ēdamkarotē cukura?',
    a: 'Vienā ēdamkarotē ar nelielu kaudzīti ietilpst aptuveni 25 gramu cukura. Pūdercukura ir nedaudz mazāk — aptuveni 12 gramu.',
  },
  {
    q: 'Vai glāze vienmēr ir 250 ml?',
    a: 'Tradicionāli ar "glāzi" receptēs saprot 250 ml tilpumu. Tomēr mūsdienās daudzas glāzes ir 200 ml. Vienmēr pārbaudiet savas glāzes tilpumu, lai nodrošinātu precīzu mērījumu.',
  },
  {
    q: 'Kā precīzi mērīt produktus?',
    a: 'Beramus produktus (miltus, cukuru) ieteicams iekraut ar karoti, nevis grūst. Šķidrumus ielejiet līdz malai. Precīzākajam rezultātam izmantojiet virtuves svarus, bet ikdienā mūsu kalkulators palīdzēs ātri pārrēķināt mērvienības.',
  },
];

export default function FAQSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-muted/30" id="faq">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Biežāk uzdotie jautājumi
          </h2>
          <p className="text-muted-foreground">
            Atbildes uz populārākajiem jautājumiem par virtuves mērvienībām
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border/40 rounded-xl px-5 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}