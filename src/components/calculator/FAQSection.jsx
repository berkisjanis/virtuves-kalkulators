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
    a: 'Vienā standarta glāzē (250 ml) ietilpst aptuveni 160 gramu kviešu miltu. Tas ir mazāk nekā cukurs vai sāls, jo milti ir vieglāki un irdenāki. Ja recepte paredz 2 glāzes miltu, tas atbilst aptuveni 320 gramiem. Mērīšanas precizitātei ieteicams miltus izsijāt caur sietu un uzirdināt pirms mērīšanas.',
  },
  {
    q: 'Cik gramu ir ēdamkarotē cukura?',
    a: 'Vienā ēdamkarotē ar nelielu kaudzīti ietilpst aptuveni 25 gramu cukura. Pūdercukurs ir nedaudz mazāk - aptuveni 12 gramu, jo tas ir daudz smalkāks un irdenāks. Brūnajam cukuram, atkarībā no tā mitruma satura, viena ēdamkarote sver 15–20 gramus.',
  },
  {
    q: 'Vai glāze vienmēr ir 250 ml?',
    a: 'Tradicionāli ar "glāzi" receptēs saprot 250 ml tilpumu. Tomēr mūsdienās daudzas glāzes ir 200 ml. Vienmēr pārbaudiet savas glāzes tilpumu ar mērkrūzi, lai nodrošinātu precīzu mērījumu. Vecākās latviešu receptēs "glāze" parasti nozīmē 250 ml, bet ēdienu gatavojot pēc modernākām receptēm - 200 ml.',
  },
  {
    q: 'Kā precīzi mērīt produktus ar karoti?',
    a: 'Beramus produktus (miltus, cukuru, sāli) ieteicams bērt ar karoti, nevis no iepakojuma. Pārpalikumu var nolīdzināt ar naža asmeni vai taisnu priekšmetu. Šķidrumus ielejiet līdz malai. Precīzākajam rezultātam izmantojiet virtuves svarus, bet ikdienā mūsu kalkulators palīdzēs ātri pārrēķināt mērvienības bez papildu aprēķiniem.',
  },
  {
    q: 'Cik gramu ir tējkarotē sāls?',
    a: 'Vienā tējkarotē ietilpst aptuveni 7–8 grami sāls. Rupjais jūras sāls ir nedaudz vieglāks un viena tējkarote var svērt 5–6 gramus. Smalkā galda sāls viena tējkarote parasti ir 6–7 grami. Ja receptē norādīts "šķipsniņa sāls", tas atbilst aptuveni 0,5 gramiem jeb 1/8 tējkarotei.',
  },
  {
    q: 'Kā pārvērst glāzes ēdamkarotēs?',
    a: 'Viena glāze (250 ml) ir vienāda ar aptuveni 16 ēdamkarotēm. Puse glāzes = 8 ēdamkarotes. Ceturtdaļa glāzes = 4 ēdamkarotes. Šī attiecība palīdz gadījumos, ja receptē norādītas glāzes, bet jums ir tikai karotes vai otrādi. Mūsu kalkulators var palīdzēt arī ar gramiem - vienkārši izvēlieties produktu un ievadiet daudzumu.',
  },
  {
    q: 'Cik tējkarošu ir vienā ēdamkarotē?',
    a: 'Vienā ēdamkarotē ietilpst trīs tējkarotes. Šī ir starptautiski atzīta standarta proporcija. Tas nozīmē, ka 1 ēdamkarote = 3 tējkarotes, un 1 glāze = 48 tējkarotes. Bieži vien mājas receptēs "deserta karote" ir vidēja starp tējas un ēdamkaroti un atbilst aptuveni 1,5 tējkarotēm.',
  },
  {
    q: 'Cik gramu sviesta ir vienā ēdamkarotē?',
    a: 'Vienā ēdamkarotē sviesta ietilpst aptuveni 14–15 grami. Ja sviestam ir istabas temperatūra, tas aizpilda karoti vienmērīgi. Saldētam sviestam var būt nedaudz atšķirīgs blīvums. Receptēs bieži norādīts sviests 50 g vai 100 g - mūsu kalkulators palīdz ātri pārrēķināt, cik tas ir karotēs.',
  },
  {
    q: 'Kā mērīt šķidros produktus ar karoti?',
    a: 'Šķidrumus (eļļu, etiķi, sojas mērci, vanilīna esenci) mēra tāpat kā cietos produktus - karote tiek piepildīta pilna. Viena ēdamkarote šķidruma atbilst 15 ml, bet viena tējkarote - 5 ml.',
  },
  {
    q: 'Cik gramu rīsu ir vienā glāzē?',
    a: 'Vienā standarta glāzē (250 ml) ietilpst aptuveni 200–220 grami rīsu. Tas ir pietiekami 2–3 porcijām piedevu. Gatavošanas gaitā rīsi uzbriest un palielinās 2–3 reizes, tāpēc no vienas glāzes rīsu izvārītā veidā iznāk 3–4 glāzes. Brūnie rīsi ir nedaudz smagāki un to viena glāze sver aptuveni 230 gramus.',
  },
  {
    q: 'Vai karotes lielums ietekmē mērījumu precizitāti?',
    a: 'Jā, karotes lielums var ietekmēt rezultātu. Standarta ēdamkarotes tilpums ir 15 ml, bet dažas lielākās ēdamkarotēs var ietilpt 20 ml. Tāpat tējkarotes standarts ir 5 ml, taču ikdienā izmantotās tējkarotes var būt mazākas vai lielākas. Ja precizitāte ir svarīga (cepšana, konditorejas izstrādājumi), ieteicams izmantot speciālas mērkārotes vai svarus.',
  },
  {
    q: 'Kā aprēķināt daudzumu, ja recepte ir paredzēta citam porciju skaitam?',
    a: 'Ja recepte paredzēta 4 porcijām, bet jums vajag 6, sadaliet 6 ar 4 un iegūsiet koeficientu 1,5. Pēc tam reiziniet katru sastāvdaļu ar 1,5. Mūsu kalkulators palīdz strādāt ar gramiem, kas atvieglo šādus aprēķinus - gramus ir vieglāk dalīt un reizināt nekā karotes un glāzes.',
  },
  {
    q: 'Kāpēc miltus nevar mērīt tāpat kā šķidrumus?',
    a: 'Milti ir irdeni un var viegli sabiezināties. Ja miltus ieberat glāzē, saspiežot tos, var ietilpt par 20–30% vairāk miltu nekā vajadzīgs. Tāpēc miltus ieteicams likt glāzē ar karoti, nevis iebērt tieši no maisa, un pārpalikumu nolīdzināt. Šis paņēmiens nodrošina, ka miltiem ir pareizs daudzums bez svēršanas.',
  },
  {
    q: 'Vai produktu blīvums mainās temperatūras dēļ?',
    a: 'Daži produkti mainās temperatūras ietekmē. Piemēram, auksts medus ir biezāks un smagāks par karstu medu. Sviestam istabas temperatūrā ir atšķirīgs blīvums no auksta. Šķidri produkti (eļļa, piens) temperatūras ziņā ir stabilāki. Mūsu kalkulatorā norādītās vērtības attiecas uz produktiem istabas temperatūrā.',
  },
  {
    q: 'Kādus produktus nav ieteicams mērīt ar glāzēm vai karotēm?',
    a: 'Gaļu, zivis un dārzeņus parasti mēra gramos vai kilogramos, jo to blīvums un forma ir pārāk mainīgi. Sviestam, kas ir iepakots formā, bieži ir gramos norādīts daudzums uz iepakojuma. Rīvētu sieru var mērīt ar glāzēm, bet labāk svērt, jo atkarībā no rīvēšanas biezuma glāzē var ietilpt dažāds daudzums.',
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
