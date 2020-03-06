export function getUrlVars() {
    var vars = {};
    var parts = decodeURIComponent(window.location.href.replace( /#/, "" )).replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}
  