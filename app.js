let znamenia = {     
    baran: {
      name: "ARIES",
      image: "./images/baran.jpg",
      start: "21.03.",
      end: "20.04.",
      popis:
        "Počítať by ste mali len s reálnymi možnosťami, vzdušné zámky by pre vás mohli byť skazou. Časom sa ukáže, kto si zaslúži vašu pozornosť a kto len vás len hlúpo využíva. S láskou ste na tom našťastie naozaj dobre, tam hľadajte podporu.
    },
    
    byk: {
      name: "TAURUS",
      image: "./images/byk.jpg",
      start: "21.04.",
      end: "20.05.",
      popis:
        "Dnešný deň možno nezačne trikrát dobre, o to lepšie sa však skončí. Nečakajte žiadne zázraky, ale v dôsledku milých prekvapení budete skutočne spokojní. Ak vás partner poprosí o úprimný rozhovor, nebráňte sa, pokojne otvorte svoje srdce a vyjadrite všetky pocity.
    },
    
    blizenci: {
      name: "GEMINI",
      image: "./images/blizenec.jpg",
      start: "21.05.",
      end: "21.06.",
      popis:
        "Plnenie si snov môže byť jednoduché, ak konečne naberiete trochu viac odvahy. Nezabúdajte, že blízki stoja pri vás a radi podporia každú vašu myšlienku - vám to prinesie šťastie a im radosť z toho, že sa vám darí.
    },
    
    rak: {
      name: "CANCER",
      image: "./images/rak.png",
      start: "22.06.",
      end: "22.07.",
      popis:
        "Môžete sa tešiť na pekný deň, kedy bude všetko fajn. Nikto sa s vami nebude škriepiť, ľudia okolo vás budú mať dobrú náladu rovnako ako vy. Využite chvíle na stretnutie s priateľmi i s rodinou a večer si doprajte relax, aby ste načerpali nové sily. Pozor na financie, nerobte žiadne vážne rozhodnutia.
    },
    
    lev: {
      name: "LEO",
      image: "./images/lev.jpg",
      start: "23.07.",
      end: "22.08.",
      popis:
        "Urobte si čas na všetko a všetkých, na ktorých vám záleží. Nestrácajte už ani chvíľu s niekým, kto si to nezaslúži a nie je vlastne pre váš život nijak zvlásť potrebný. Večer si možno budete musieť pohovoriť s polovičkou aj o finančných záležitostiach.
    },
    
    panna: {
      name: "VIRGO",
      image: "./images/panna.png",
      start: "23.08.",
      end: "22.09.",
      popis:
        "Dnes sa vám môžu splniť všetky želania, stačí len trochu chcieť. Snažte sa optimizmom nakaziť aj okolie a ak niekto bude potrebovať vašu pomoc, neváhajte byť záchrancom v núdzi. V láske vám hviezdy prajú azda najviac zo všetkého, tešte sa.
    },
    
    vahy: {
      name: "LIBRA",
      image: "./images/vahy.jpg",
      start: "23.09.",
      end: "22.10.",
      popis:
        "Máte pred sebou pekný deň plný oddychu. Pracovné povinnosti nechajte za dverami kancelárie, netrápte sa pre to, čo ste nestihli dokončiť, ono si vás aj tak počká. Venujte sa svojim blízkym, svojej láske a všetkému, čo máte radi.
    },
    
    skorpion: {
      name: "SCORPIUS",
      image: "./images/skorpion.png",
      start: "23.10.",
      end: "22.11.",
      popis:
        "Bude to tak krásny deň, v žiadnom prípade si ho nekazte hádkou o tom, čo budete robiť. Pristúpte na kompromis, alebo sa prispôsobte úplne, pokiaľ vás polovička nenúti k fyzickej záťaži, tak sa tešte zo všetkého.
    },
    
    strelec: {
      name: "SAGITTARIUS",
      image: "./images/strelec.png",
      start: "23.11.",
      end: "21.12.",
      popis:
        "Prepadáte smútku z toho, že neviete nájsť tú správnu cestu za naplnením svojich snov. Máte jasno v tom, čo chcete, ale realita vás vždy dobehne. Zdôverte sa svojou nerozhodnosťou partnerovi, dokáže vás počúvať a lepšie zhodnotiť celú situáciu.
    },
    
    kozorozec: {
      name: "CAPRICORN",
      image: "./images/kozorozec.jpg",
      start: "22.12.",
      end: "20.1.",
      popis:
        "Snažte sa sústrediť aj počas voľna, hoci ste sa pustili do vecí, ktoré máte radi, polovičatou prácou by ste mnohé len zmrvili. Keďže ste sa rozhodli pre aktívny odpočinok, večer si už neplánujte bujaré zábavy a snažte sa zaliezť do postele čím skôr.
    },
    
     vodnar: {
      name: "AQUARIAS",
      image: "./images/vodnar.png",
      start: "21.01.",
      end: "19.02.",
      popis:
        "Pristupujte ku všetkému spravodlivo ako v pracovnom, tak i v osobnom živote, len tak si užijete zaslúžený úspech. Svoje záväzky si naozaj splňte zodpovedne, vyhnete sa tak zbytočným problémom. Doma či s priateľmi očakávajte príjemné chvíle.
    },
    
    ryby: {
      name: "PISCES",
      image: "./images/ryby.jpg",
      start: "20.02.",
      end: "20.03.",
      popis:
        "Aj dnes vás čakajú nejaké povinnosti, našťastie ich nebude veľa, tak sa do nich pustite už doobeda. Plány s rodinou či s vašou polovičkou, ktoré ste si urobili už dávnejšie, vyjdú presne podľa vašich predstáv, tak si ich naplno užite.
    },
    
  };
  
  function changeDateTime(event) {
    event.preventDefault();
    const birthday = document.getElementById("birthday").value;
    const znamenie = getZnamenie(new Date(birthday));
    document.querySelector(".horoskop-image img").src = znamenie.image;
    document.querySelector(".horoskop-sign").innerHTML = znamenie.name;
    document.querySelector(".custom-text").innerHTML = znamenie.popis;
  }
  
  function parseDate(date) {
    const parts = date.split(".");
    return new Date(`${parts[1]}-${parts[0]}-${1978}`);
  }
  
  function getZnamenie(date) {
    for (let key in znamenia) {
      const znamenie = znamenia[key];
      const start = parseDate(znamenie.start);
      const end = parseDate(znamenie.end);
  
      if ((date.getMonth() == start.getMonth() &&
          date.getDate() >= start.getDate()) ||
        (date.getMonth() == end.getMonth() && 
        date.getDate() <= end.getDate())) {
        return znamenie;
      }
      
  
    }
  }
