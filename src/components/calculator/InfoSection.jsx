import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const infoCards = [
  {
    icon: '🥛',
    title: 'Glāze',
    text: 'Tradicionāli ar glāzi saprot 250 ml šķidruma, bet patlaban daudzu glāžu standarts ir 200 ml. Mēra galvenokārt šķidrumu (ūdeni, pienu, kefīru, sulas), arī beramus produktus, piemēram, cukuru vai miltus. Der ievērot, ka 250 ml glāzē ietilpst aptuveni 150–160 g miltu, 200 g cukura.',
  },
  {
    icon: '🥄',
    title: 'Ēdamkarote',
    text: 'Visbiežāk izmantotā karošu mērvienība. Tajās mēra cukuru, miltus, skābo krējumu, etiķi, eļļu, saldo krējumu un citus produktus. Ēdamkarotē ietilpst vidēji 20–30 g produkta, piemēram, 25 g cukura un miltu, 30 g sāls, 20 g kanēļa, aptuveni 25 g skābā krējuma un 15 ml šķidruma.',
  },
  {
    icon: '☕',
    title: 'Tējkarote',
    text: 'Šādu mērvienību parasti izmanto, lai precīzi noteiktu nelielu daudzumu. Tējkarotēs mēra garšvielas (sāli, cukuru, kanēli), piedevas (sodu, cepamo pulveri, kartupeļu cieti), šķidrumus (etiķi un eļļu) un citas ēdiena sastāvdaļas (medu, sinepes, mārrutkus). Tējkarotē ietilpst aptuveni 8–10 g miltu, cukura, vaniļas cukura un 5 ml šķidruma.',
  },
];

export default function InfoSection() {
  return (
    <section className="px-4 py-16 md:py-24" id="info">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mērvienību ceļvedis
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Izprotiet katru mērvienību un tās lietojumu virtuvē
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full p-6 border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-2xl">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}