(function(){

  "use strict";

  var filter;
  var listings;

  function init() {
    filter = document.querySelector(".js-filter-form");
    if (!filter) return;

    listings = document.querySelectorAll(".js-listing");

    filter.classList.remove("is-hidden");
    filter.addEventListener("input", onInputChange);
  }

  function onInputChange(e) {
    var searchValue = e.target.value.toLowerCase();
    if (!searchValue) {
      Array.prototype.forEach.call(listings, setActiveState);
    } else {
      Array.prototype.forEach.call(listings, function(listing) {
        if (listing.textContent.toLowerCase().indexOf(searchValue) > -1) {
          setActiveState(listing);
        } else {
          setInactiveState(listing);
        }
      });
    }
  }

  function setActiveState(el) {
    el.classList.remove("is-inactive");
  }

  function setInactiveState(el) {
    el.classList.add("is-inactive");
  }

  init();
})();