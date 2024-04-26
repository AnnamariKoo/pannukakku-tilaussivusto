// Lähde liikenteeseen peruspannukakkuvaihtoehdoista: Valinnasta riippuen, alhaalla näkyisi oikea hinta kyseiselle pannukakulle.

const valinta = document.getElementById("type");
const hintaPaikat = document.querySelectorAll(".totalPrice");

const valintatapahtuma = () => {
  const hintalappu = document.querySelector(".price-banner");

  //   if (hintalappu.classList.contains("price-banner-animaatio")) {
  //     hintalappu.classList.remove("price-banner-animaatio");
  //     console.log("löyty! yritetääs poistaa ja katotaan sit uudestaan");
  //     console.log("poistettu. Nyt hintalappu.classList:");
  //     console.log(hintalappu.classList);
  //   }

  hintalappu.classList.add("price-banner-animaatio");
  setTimeout(() => {
    hintalappu.classList.remove("price-banner-animaatio");
  }, 500);
  let hinta = valinta.value;

  const lisavalinnat = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  lisavalinnat.forEach((lisavalinta) => {
    hinta = +hinta + +lisavalinta.value;
  });

  hintaPaikat.forEach((hintaPaikka) => {
    hintaPaikka.textContent = hinta + "€";
  });
};

document.addEventListener("change", valintatapahtuma);
