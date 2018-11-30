'use strict';

(function() {
  var hiddenClass = 'display-none';

  var filter;
  var filterForm;
  var listings;

  function setActiveState(el) {
    el.classList.remove(hiddenClass);
  }

  function setInactiveState(el) {
    el.classList.add(hiddenClass);
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

    filterForm.classList.remove(hiddenClass);
    filter.addEventListener('input', onInputChange);
  }

  init();
})();
