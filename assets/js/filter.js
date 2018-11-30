'use strict';

(function() {
  var MATCHES_FILTER_QUERY = /\?filter=(.+)/;
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

  function updateListingsVisibility(searchValue) {
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

  function onInputChange(e) {
    var searchValue = e.target.value.toLowerCase();
    updateListingsVisibility(searchValue);
  }

  function init() {
    filterForm = document.getElementById('filter-form');

    if (!filterForm) {
      return;
    }

    filter = document.getElementById('filter');
    listings = document.getElementsByClassName('listing');

    var filterQuery = MATCHES_FILTER_QUERY.exec(location.search);

    if (filterQuery) {
      filter.value = filterQuery[1].toLowerCase();
      updateListingsVisibility(filter.value);
    }

    filterForm.classList.remove(DISPLAY_NONE);
    filter.addEventListener('input', onInputChange);
  }

  init();
})();
