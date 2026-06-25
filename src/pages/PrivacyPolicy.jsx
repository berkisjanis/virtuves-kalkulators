import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple navbar */}
      <header className="border-b border-border/40 bg-card/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ChefHat className="w-5 h-5 text-primary" />
            <span className="font-playfair font-semibold text-foreground">Virtuves Kalkulators</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
          Privātuma politika
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <p>
            Šī privātuma politika apraksta, kā tīmekļa vietne <strong className="text-foreground">cikgrami.lv</strong> ("mēs", "mums") vāc, izmanto un aizsargā informāciju, ko jūs sniedzat, izmantojot šo vietni. Mēs augstu vērtējam jūsu privātumu un apņemamies aizsargāt jūsu personas datus saskaņā ar Eiropas Savienības Vispārīgo datu aizsardzības regulu (GDPR) un Latvijas Republikas tiesību aktiem.
          </p>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              1. Kādu informāciju mēs vācam?
            </h2>
            <p>
              Tīmekļa vietne <strong className="text-foreground">cikgrami.lv</strong> ir bezmaksas kalkulators, kas neprasa reģistrāciju vai pieteikšanos. Mēs tieši nevācam personas datus, piemēram, vārdus, e-pasta adreses vai tālruņu numurus.
            </p>
            <p className="mt-3">
              Tomēr mēs izmantojam trešo pušu pakalpojumus, kas var vākt noteiktu informāciju automātiski:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">Google Analytics</strong> — vāc anonimizētu informāciju par vietnes apmeklējumiem, tostarp lapas skatījumus, laiku, ko pavadāt vietnē, ierīces veidu un ģeogrāfisko atrašanās vietu (valsts/pilsētas līmenī). Šie dati palīdz mums uzlabot vietni.</li>
              <li><strong className="text-foreground">Google AdSense</strong> — izmanto sīkdatnes, lai rādītu relevantas reklāmas. Reklāmu personalizācija balstās uz jūsu iepriekšējo pārlūkošanas vēsturi.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              2. Sīkdatnes (Cookies)
            </h2>
            <p>
              Mūsu vietne izmanto sīkdatnes — nelielas teksta datnes, kas tiek saglabātas jūsu ierīcē. Mēs izmantojam šādus sīkdatņu veidus:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">Funkcionālās sīkdatnes</strong> — saglabā jūsu preferences vietnē (piemēram, tumšo/gaišo režīmu un iecienītākos produktus).</li>
              <li><strong className="text-foreground">Analītikas sīkdatnes</strong> — Google Analytics izmanto, lai apkopotu anonīmu statistiku par vietnes lietošanu.</li>
              <li><strong className="text-foreground">Reklāmu sīkdatnes</strong> — Google AdSense izmanto personalizētu reklāmu rādīšanai.</li>
            </ul>
            <p className="mt-3">
              Jūs varat atspējot sīkdatnes savā pārlūkprogrammā, taču tas var ietekmēt dažas vietnes funkcijas. Lai uzzinātu vairāk par Google sīkdatņu izmantošanu, apmeklējiet <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google privātuma politiku</a>.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              3. Kā mēs izmantojam informāciju?
            </h2>
            <p>Apkopotā informācija tiek izmantota šādiem mērķiem:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Vietnes darbības uzlabošanai un kļūdu labošanai.</li>
              <li>Apmeklētāju uzvedības analīzei, lai saprastu, kuras funkcijas ir populārākās.</li>
              <li>Anonīmas statistikas veidošanai par vietnes izmantošanu.</li>
              <li>Reklāmu rādīšanai caur Google AdSense tīklu.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              4. Reklāmas
            </h2>
            <p>
              Mūsu vietne izmanto Google AdSense, lai rādītu reklāmas. Google kā trešās puses reklāmas pakalpojumu sniedzējs izmanto sīkdatnes, lai rādītu reklāmas, pamatojoties uz jūsu iepriekšējiem vietnes apmeklējumiem. Google reklāmu sīkdatņu izmantošanu varat atspējot, apmeklējot <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google reklāmu iestatījumus</a>.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              5. Datu glabāšana un drošība
            </h2>
            <p>
              Mēs neglabājam jūsu personas datus savos serveros. Visi analītikas dati tiek glabāti Google infrastruktūrā saskaņā ar Google datu aizsardzības noteikumiem. Vietnes preferences (tumšais režīms, iecienītākie produkti) tiek glabātas tikai jūsu pārlūkprogrammas lokālajā atmiņā (localStorage) un netiek sūtītas uz mūsu serveriem.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              6. Jūsu tiesības
            </h2>
            <p>Saskaņā ar GDPR jums ir šādas tiesības:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Tiesības piekļūt saviem datiem.</li>
              <li>Tiesības labot neprecīzus datus.</li>
              <li>Tiesības uz datu dzēšanu ("tiesības tikt aizmirstam").</li>
              <li>Tiesības ierobežot datu apstrādi.</li>
              <li>Tiesības iebilst pret datu apstrādi mārketinga nolūkos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              7. Sazinieties ar mums
            </h2>
            <p>
              Ja jums ir jautājumi par šo privātuma politiku vai vēlaties īstenot savas tiesības, sazinieties ar mums, rakstot uz e-pasta adresi: <a href="mailto:info@cikgrami.lv" className="text-primary hover:underline">info@cikgrami.lv</a>
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-3">
              8. Izmaiņas privātuma politikā
            </h2>
            <p>
              Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stājas spēkā nekavējoties pēc to publicēšanas vietnē. Ieteicams periodiski pārskatīt šo politiku, lai būtu informēti par jebkādām izmaiņām.
            </p>
            <p className="mt-3 text-sm">
              Pēdējo reizi atjaunināts: 2026. gada jūnijs
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-border/40">
          <Link to="/" className="text-primary hover:underline text-sm">
            ← Atpakaļ uz kalkulatoru
          </Link>
        </div>
      </main>
    </div>
  );
}
