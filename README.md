# Ichthus Utrecht Gasten Portaal

Dit is de source code van het gasten portaal van de Ichthus Utrecht website.
Leuk dat je even komt kijken!

Het gasten portaal is gemaakt met gohugo, een statische site generator die gebruik maakt van markdown. De site is gehost op vercel.

## Hoe beheer ik de content

### Nieuwsberichten

Onder de `content/newsupdates` folder vind je de markdown bestanden voor de nieuwsberichten. Deze zien er als volgt uit:

```markdown
---
title: "News Update 1"
date: 2023-01-01
draft: false
summary: "This is a short summary of the first news update."
---

Het nieuwe jaar trapten we af met een nieuwjaars Praise-and-Prayer. Wat is er beter dan het nieuwe jaar beginnen met aanbidding? Nadat we naar hartenlust gezongen hadden, speechte Marlies, onze Praeses. Ook werd die avond bekend gemaakt wie het hoc tempore bestuur (het huidige bestuur) aandraagt om het stokje over te nemen.
```

### Bestuur

Onder de `content/bestuur` folder vind je de markdown bestanden voor de bestuursleden. Deze zien er als volgt uit:

```markdown
---
title: "Bestuurs naam" # De naam van het bestuurslid
subtitle: "Praeses" # De functie van het bestuurslid
mail: fiscus@ichthusutrecht.nl # Het mailadres van het bestuurslid
facebook: https://nl-nl.facebook.com/csvichthusutrecht # De facebook pagina van het bestuurslid
instagram: https://www.instagram.com/ichthus_utrecht/ # De instagram pagina van het bestuurslid
image: /bestuur/bestuur-person-1.jpg # De afbeelding van het bestuurslid, dit verwijst naar de `content` folder
render: false # Of de pagina gerenderd moet worden, dit is handig als je een pagina wilt maken die niet in de navigatie komt. In dit geval hoeft een bestuurslid geen eigen pagina.
---

Hoi ik ben de bestuurtekst. Je kunt mij gewoon in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) schrijven.

```
### Paginas

In de content folder vind je markdown bestanden voor de verschillende paginas. Elke markdown folder is een pagina.
Zo'n markdown bestand ziet er als volgt uit:

```markdown
---
title: Bestuur # De titel van de pagina
linktitle: Bestuur # De titel die in de navigatie komt
subtitle: " Zoals elke studentenvereniging heeft ook Ichthus Utrecht een bestuur! Onderstaand stellen zij zich aan jou voor." # De subtitel van de pagina
description: De bestuursleden # De beschrijving van de pagina
layout: "single" # De layout die gebruikt moet worden, dit verwijst naar de `layouts/_default` folder. Dit kan je weglaten, of een andere layout kiezen.
menu: # De menu items die in de navigatie moeten komen
  main: 
    parent: "vereniging" # De parent van het menu item, dit verwijst naar de `config.toml` file
    weight: 2 # De volgorde van het menu item
---

Weer meer markdown tekst.

Oh, dit is een shortcode waarmee je de bestuurleden kunt laten zien:
{{< bestuur >}}

```

## Hoe ontwikkel ik?

1. Installeer [gohugo](gohugo.io) of gebruik de devcontainer in VSCode.
2. Draai `hugo server` om de site te draaien op `localhost:1313`.

Vanaf hier kun je de site aanpassen en zien hoe het eruit ziet.

De layouts zijn gemaakt met [TailwindCSS](https://tailwindcss.com/) en [Alpine.js](https://alpinejs.dev/). 
Wij gebruiken onze eigen layout en styles, zonder gebruik te maken van de standaard thema's van hugo.
Je kunt de layouts paginas vinden onder de `layouts` folder.

Kijk ook ff [de youtube series](https://www.youtube.com/watch?v=0GZxidrlaRM&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3&index=6) over `gohugo.
