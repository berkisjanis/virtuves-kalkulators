import React from 'react';
import { motion } from 'framer-motion';

export default function ArticleSection() {
  return (
    <section className="px-4 py-16 md:py-24" id="raksts">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Virtuves mērvienību pilnīgs ceļvedis
          </h2>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-6 leading-relaxed">

            <p>
              Precīza mērīšana virtuvē ir viens no svarīgākajiem faktoriem veiksmīgā ēdiena gatavošanā. Neatkarīgi no tā, vai gatavojat ikdienas maltīti vai sarežģītu konditorejas izstrādājumu, pareizas mērvienības nodrošina, ka rezultāts atbildīs receptes autoram iecerētajam. Šajā ceļvedī izskaidrots, kā pareizi izmantot biežāk lietotos virtuves mērus — glāzes, ēdamkarotes un tējkarotes — un kā tos pārvērst gramos dažādiem produktiem.
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Kāpēc precizitāte ir svarīga ēdiena gatavošanā?
            </h3>
            <p>
              Cepot maizi, kūkas vai citus konditorejas izstrādājumus, mīklas sastāvdaļu attiecībai ir izšķiroša nozīme. Pārāk daudz miltu padara kūku sauso, bet pārāk maz — tā izlīst cepšanas laikā. Sāls, cepamā pulvera vai sodas pārpalikums var pilnībā sabojāt garšu. Tāpēc pieredzējuši konditori vienmēr izmanto svarus vai precīzas mērkārotes, nevis "uz aci". Tomēr ikdienā svari nav vienmēr pieejami, un tieši tāpēc virtuves kalkulators ir tik noderīgs — tas palīdz ātri pārrēķināt gramus no glāzēm un karotēm.
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Glāze kā mērvienība
            </h3>
            <p>
              Glāze ir viena no senākajām virtuves mērvienībām, un tā lietotas gandrīz visās Eiropas valstīs. Latvijā tradicionāli ar "glāzi" saprot 250 ml tilpumu — tieši tik daudz ietilpst standarta tējas glāzē. Taču mūsdienās mājsaimniecībās bieži atrodamas 200 ml vai pat 300 ml glāzes, kas var radīt pārpratumus, ja recepte ir rakstīta, domājot par 250 ml standartu.
            </p>
            <p>
              Šķidrumus glāzē mērīt ir vienkārši — ielej un pārbaudi ar aci. Beramus produktus glāzē jāber ar karoti, nevis tiešā no trauka, lai produkts pārāk neblīvētos. Pareizi mērīti milti (iesūtīti ar karoti glāzē un nolīdzināti) sver aptuveni 160 gramus 250 ml glāzē. Turpretī, ja miltus glāzē ber tieši no maisa un sablīvē, sver var palielināties par 20–40 gramiem.
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Ēdamkarote un tās izmantošana
            </h3>
            <p>
              Ēdamkarote (saīsinājums: ēdk.) ir mērvienība, kuras tilpums ir 15 ml. Tā ir visbiežāk lietotā karošu mērvienība receptēs visā pasaulē. Latvijā ēdamkaroti izmanto cukura, miltu, eļļas, etiķa, mērču un daudzu citu produktu mērīšanai. Svarīgi atcerēties, ka standarta ēdamkarote ir "vienāda" jeb bez kaudzītes — produkts tiek nolīdzināts tā, lai tas neizceļas pāri karotei.
            </p>
            <p>
              Dažās receptēs, īpaši vecākās latviešu pavārgrāmatās, minēta "kaušķkarote" vai "kaudzītes karote" — tas nozīmē, ka produkts aizpilda karoti ar nelielu kaudzīti. Šādā gadījumā produkta daudzums ir par 20–30% lielāks nekā standarta ēdamkarotē. Piemēram, ēdamkarote cukura bez kaudzītes = aptuveni 18–20 g, bet ar kaudzīti — 25–28 g.
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Tējkarote — mazā, bet svarīgā mērvienība
            </h3>
            <p>
              Tējkarote (saīsinājums: tēk.) satur 5 ml šķidruma vai aptuveni 5–10 g beramu produktu atkarībā no blīvuma. To lieto mazo daudzumu mērīšanai — garšvielām, cepamajam pulverim, sodai, aromātiskajām esencēm un citām piedevām, kuru pārdozēšana var sabojāt ēdiena garšu. Trīs tējkarotes veido vienu ēdamkaroti, un šī proporcija ir noderīga, aprēķinot daudzumus receptēs.
            </p>
            <p>
              Tējkarotes satura precizitāte ir īpaši svarīga cepšanā. Cepamā pulvera vai sodas pārpalikums var padarīt kūku pārāk porainu un ar nepatīkamu garšu. Sāls pārpalikums — pārāk sāļu. Tāpēc, ja receptē norādīts "1 tējkarote cepamā pulvera", tas nozīmē tieši 5 ml, nevis "apmēram tikdaudz".
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Populārāko produktu mērvienību tabula
            </h3>
            <p>
              Zemāk apkopotas orientējošas vērtības biežāk izmantotajiem produktiem. Jāatceras, ka tie ir vidējie rādītāji — precīzs svars var nedaudz atšķirties atkarībā no produkta ražotāja, mitruma satura un mērīšanas metodes.
            </p>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong className="text-foreground">Kviešu milti:</strong> 1 glāze (250 ml) = ~160 g; 1 ēdamkarote = ~10 g; 1 tējkarote = ~3 g</li>
              <li><strong className="text-foreground">Cukurs (baltais):</strong> 1 glāze = ~200 g; 1 ēdamkarote = ~20 g; 1 tējkarote = ~7 g</li>
              <li><strong className="text-foreground">Sāls:</strong> 1 glāze = ~280 g; 1 ēdamkarote = ~30 g; 1 tējkarote = ~7 g</li>
              <li><strong className="text-foreground">Rīsi:</strong> 1 glāze = ~210 g; 1 ēdamkarote = ~15 g</li>
              <li><strong className="text-foreground">Piens:</strong> 1 glāze = ~250 g (ml); 1 ēdamkarote = ~15 ml</li>
              <li><strong className="text-foreground">Saulespuķu eļļa:</strong> 1 glāze = ~215 g; 1 ēdamkarote = ~14 g; 1 tējkarote = ~5 g</li>
              <li><strong className="text-foreground">Medus:</strong> 1 glāze = ~335 g; 1 ēdamkarote = ~25 g; 1 tējkarote = ~8 g</li>
              <li><strong className="text-foreground">Skābais krējums:</strong> 1 glāze = ~250 g; 1 ēdamkarote = ~25 g</li>
            </ul>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Latviešu virtuves tradīcijas un mērvienības
            </h3>
            <p>
              Latvijas ēdienu gatavošanas tradīcijās glāzes un karotes vienmēr ieņēmušas nozīmīgu vietu. Vecajās latviešu pavārgrāmatās, kas izdotas 20. gadsimta sākumā un vidū, mērvienības bieži tika norādītas tieši glāzēs un karotēs — ne gramos. Tas bija praktisks risinājums laikmetā, kad personīgie svari mājsaimniecībās bija retums.
            </p>
            <p>
              Tradicionālajos latviešu ēdienos — rupjmaizē, pelēkajos zirņos, skābeņu zupā un kāpostu tīteņos — mērvienību precizitāte ir ļoti svarīga. Piemēram, pareizs sāls daudzums kāpostu rūgšanā nosaka fermentācijas procesu. Rupjmaizes mīklā miltu un šķidruma attiecība ietekmē maizes blīvumu un garoziņas konsistenci. Mūsu kalkulators ir veidots tā, lai latviski runājošiem mājsaimniekiem būtu ērti pārrēķināt šos daudzumus modernās receptēs.
            </p>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Padomi precīzai mērīšanai bez svariem
            </h3>
            <p>
              Ja svari nav pieejami, šie padomi palīdzēs sasniegt pēc iespējas precīzāku rezultātu:
            </p>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Izmantojiet vienu un to pašu glāzi vai karoti visas receptes garumā, lai proporcijas saglabātos vienmērīgas.</li>
              <li>Miltus vienmēr iekrājiet ar karoti glāzē un nolīdziniet — neberiet tieši no maisa.</li>
              <li>Cukuru var kalt glāzē, bet miltus — nekad.</li>
              <li>Šķidrumus (pienu, ūdeni, eļļu) vislabāk mērīt ar mērkrūzi, kas ļauj precīzi nolasīt ml.</li>
              <li>Sviestam, margarīnam un bieziem produktiem (piemēram, tomātu pastai) lūdziet palīgu — pārrēķiniet ar mūsu kakulatoru vai izmantojiet svarus.</li>
              <li>Ja recepte norāda "sauju", tā parasti atbilst aptuveni 2–3 ēdamkarotēm, taču tas ir ļoti individuāli.</li>
            </ul>

            <h3 className="font-playfair text-2xl font-semibold text-foreground pt-4">
              Kā izmantot šo kalkulatoru efektīvāk
            </h3>
            <p>
              Mūsu virtuves mērvienību kalkulators ir veidots, lai maksimāli vienkāršotu ikdienas ēdiena gatavošanu. Izvēlieties produktu no saraksta — tajā iekļauti vairāk nekā 35 populārākie pārtikas produkti, tostarp milti, cukurs, rīsi, eļļa, piens, jogurts, medus un daudz kas cits. Pēc tam ievadiet daudzumu glāzēs, ēdamkarotēs vai tējkarotēs, un kalkulators uzreiz parādīs atbilstošo svaru gramos.
            </p>
            <p>
              Kalkulators ir optimizēts arī mobilajām ierīcēm, tāpēc to var ērti lietot tieši virtuvē ar tālruni rokā. Mērvienību pārveidošana vairs neprasa laiku vai papīra lapu — pietiek ar dažiem klikšķiem, lai iegūtu precīzu atbildi. Mūsu mērķis ir padarīt latvisko ēdiena gatavošanu ērtāku, precīzāku un patīkamāku.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
