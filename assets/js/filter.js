'use strict';

(function() {
  var DISPLAY_NONE = 'display-none';

  var filter;
  var filterForm;
  var listings;

  function setActiveState(el) {
    el.classList.remove(DISPLAY_NONE);
  }

  function setInactiveState(el) {
    el.classList.add(DISPLAY_NONE);
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

  function init() {
    filterForm = document.getElementById('filter-form');

    if (!filterForm) {
      return;
    }

    filter = document.getElementById('filter');

    listings = document.getElementsByClassName('listing');

    filterForm.classList.remove(DISPLAY_NONE);
    filter.addEventListener('input', onInputChange);
  }

  init();
})();
