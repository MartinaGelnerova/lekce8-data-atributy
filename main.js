/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/
const obrazky = document.querySelectorAll('img');

obrazky.forEach((obrazek) => {
  obrazek.addEventListener('click', zobrazKalorie);
});

function zobrazKalorie(udalost) {
  let obrazek = udalost.target;

  let kalorie = obrazek.dataset.kalorie;
  let zeme = obrazek.dataset.zemePuvodu;

  let soucetKaloriiElement = document.querySelector('#soucet-kalorii');

  document.querySelector('#vysledek').textContent = `Snědl jsi ${kalorie} kcal/100g a země původu je ${zeme}.`;
  soucetKaloriiElement.textContent = parseInt(soucetKaloriiElement.textContent) + parseInt(obrazek.dataset.kalorie);

  let snedeno = document.querySelector('#snedeno');
  obrazek.removeEventListener('click', zobrazKalorie);
  snedeno.appendChild(obrazek);
}