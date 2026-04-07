# Neoon digitaalkell

Autor: Olaf Anton Kirsberg

## Projekti kirjeldus

See projekt on täisekraanil töötav digitaalne lauakell, mida saab kasutada
lauakella või screen saveri asemel. Rakendus kuvab kellaaega, kuupäeva,
nädalapäeva ja aastat ning võimaldab kasutajal muuta erinevaid atribuute.

## Funktsionaalsus

Rakenduses saab kasutaja muuta järgmisi omadusi:

1. kella fondi suurus
2. teksti värv
3. taustavärv
4. fondi tüüpi
5. ajavormingut (24h / 12h)
6. sekundite nähtavust
7. glow-efekti sisse ja välja
8. kella asukohta ekraanil
9. lehekülg saab valida suvalise värvi

Lisaks:
- topeltklõps taustal muudab teema juhuslikult
- klaviatuurilt saab kasutada kiirklahve:
  - `+` suurendab kella
  - `-` vähendab kella
  - `T` vahetab ajavormingut
  - `S` peidab või näitab sekundeid
  - `G` lülitab glow-efekti

## Tehnoloogiad

- HTML
- CSS
- JavaScript

## Objektorienteeritud lahendus

JavaScriptis on kasutatud klassi `DigitalClockApp`, mis haldab:
- kella uuendamist
- kuupäeva kuvamist
- kasutaja tegevuste kuulamist
- kujunduse muutmist

Koodis on kommentaarid, mis viitavad promptidele, mille abil lahendust loodi
ja parandati.
