(function(){
window.JST = window.JST || {};

window.JST['search_box'] = _.template('<div class="VS-search">\n  <div id="search_container">\n    <div class="VS-search-box-wrapper VS-search-box">\n      <div class="icon VS-icon-search"></div>\n      <div class="search_inner"></div>\n      <div class="icon VS-icon-cancel VS-cancel-search-box" title="clear search"></div>\n    </div>\n  </div>\n</div>');
window.JST['search_facet'] = _.template('<% if (model.has(\'category\')) { %>\n  <div class="category"><%= model.get(\'category\') %>:</div>\n<% } %>\n\n<div class="search_facet_input_container">\n  <input type="text" class="search_facet_input VS-interface" value="" />\n</div>\n\n<div class="search_facet_remove icon VS-icon-cancel"></div>');
window.JST['search_input'] = _.template('<input type="text" />');
})();