const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
document.body.style.fontFamily = 'san-serif, helvetica';
let h2 = document.querySelector('h2');
h2.textContent = h2.textContent.toUpperCase();
h2.style.letterSpacing = '8px';
h2.style.textAlign = 'center';
h2.style.fontWeight = '600';
h2.style.margin = '0px';
h2.style.padding = '2px';

let totalCountries = document.querySelector('#total-countries');
totalCountries.textContent = `Total Number of Countries:${countries.length}`;
totalCountries.style.textAlign = 'center';
totalCountries.style.fontWeight = '550';
totalCountries.style.margin = '0px';
totalCountries.style.padding = '2px';

let h3=document.querySelectorAll('h3');
h3.forEach(x => {
    x.style.textAlign = 'center';
    x.style.padding = '2px';
    x.style.margin = '0px';
});

h3[0].style.fontSize = '13px';
h3[0].style.fontWeight = '380';

h3[1].style.fontSize = '11px';
h3[1].style.fontWeight = '360';

//table
let table=document.createElement('table');

let countryCount = 0;
while(countryCount < countries.length){
    //create row in the table
  let row = document.createElement('tr');
  
  for(let i=0; i<6; i++) {
    if(countryCount == countries.length)
     break;
     //create a tabledata 
    let data = document.createElement('td');
    data.textContent = countries[countryCount].toUpperCase();
    
    data.style.paddingTop = '30px';
    data.style.paddingBottom = '30px';
    data.style.margin = '2px';
    data.style.border = '1px #eeeef3 solid';
    //add data to row
    row.appendChild(data);
    countryCount++;
  }
  //add row to table
  table.appendChild(row);
}
  // styling     
  table.style.textAlign = 'center';
  table.style.padding = '2px';
  table.style.width = '50%';
  table.style.marginLeft = '25%'
  table.style.marginRight = '25%'
  table.style.fontSize = '9px';
  table.style.fontWeight = '600';
  table.style.letterSpacing = '1px';
  table.style.backgroundColor='white'
  
document.body.appendChild(table);