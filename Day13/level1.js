let countries = ['India','Pakistan',  'Afghanistan', 'Turkey'];

let countriesObj = {first: 'Pakistan', Second: 'India', Third: 'Afghanistan', Fourth: 'Turkey'};
// 1    
console.table(countries);

// 2 
console.table(countriesObj);
//3
console.group('Array and Object');
console.table(countries);
console.table(countriesObj);
console.groupEnd();