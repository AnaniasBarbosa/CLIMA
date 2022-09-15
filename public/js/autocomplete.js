//AUTOCOMPLETE GOOGLE
let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("search"),
    {
      types: ["locality"],
      fields: ["name", "geometry", "place_id"],
      componentRestrictions: { country: "br" },
    }
  );
  autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged() {
  var place = autocomplete.getPlace();
  console.log(place);
  if (!place.geometry) {
    alert("Por favor, insira uma cidade válida.");
    document.getElementById("search").value = "";
    document.getElementById("search").placeholder = "digite uma cidade";
  } else {
    const cidade = place.name;
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    const dadosRegiao = {
      cidade,
      latitude,
      longitude,
    };
    localStorage.setItem("dadosRegiao", JSON.stringify(dadosRegiao));
    return (window.location.href = "clima");
  }
}
