var s = require('fs').readFileSync('docs/characters/index.html', 'utf8');
console.log('has initFilters:', s.indexOf('initFilters') > -1);
console.log('has triggerFilter:', s.indexOf('triggerFilter') > -1);
console.log('has addEventListener change:', s.indexOf(`addEventListener('change'`) > -1);
console.log('has attackFilter:', s.indexOf('attackFilter') > -1);
console.log('cats trigger_technique:', s.indexOf("'trigger_technique'") > -1);
console.log('cats attack_technique:', s.indexOf("'attack_technique'") > -1);

// Check the initFilters function
var idx = s.indexOf('function initFilters');
console.log('\ninitFilters source:');
console.log(s.substring(idx, idx + 1200));
