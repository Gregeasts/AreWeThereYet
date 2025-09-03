// ====== Calibration with Two Cities ======
// Pick two reference cities (known lat/lon)
function getSelectedTypes() {
  const checkboxes = document.querySelectorAll('#filter input[type=checkbox]');
  const selected = [];
  checkboxes.forEach(cb => { if(cb.checked) selected.push(cb.value); });
  return selected;
}
const targets=[

     // England (selected)
    // Wales (Principal Areas / Historic Counties)
    { name: 'Anglesey', type: 'County', lat: 53.3000, lon: -4.3500 },
    { name: 'Gwynedd', type: 'County', lat: 53.0830, lon: -4.0830 },
    { name: 'Conwy', type: 'County', lat: 53.2830, lon: -3.8330 },
    { name: 'Denbighshire', type: 'County', lat: 53.2000, lon: -3.4170 },
    { name: 'Flintshire', type: 'County', lat: 53.2500, lon: -3.1670 },
    { name: 'Wrexham', type: 'County', lat: 53.0462, lon: -2.9928 },
    { name: 'Powys', type: 'County', lat: 52.5400, lon: -3.3800 },
    { name: 'Ceredigion', type: 'County', lat: 52.2000, lon: -4.1000 },
    { name: 'Pembrokeshire', type: 'County', lat: 51.8333, lon: -4.9667 },
    { name: 'Carmarthenshire', type: 'County', lat: 51.8500, lon: -4.3000 },
    { name: 'Swansea', type: 'County', lat: 51.6214, lon: -3.9436 },
    { name: 'Neath Port Talbot', type: 'County', lat: 51.6500, lon: -3.8000 },
    { name: 'Bridgend', type: 'County', lat: 51.5050, lon: -3.5833 },
    { name: 'Vale of Glamorgan', type: 'County', lat: 51.4333, lon: -3.4333 },
    { name: 'Cardiff', type: 'County', lat: 51.4816, lon: -3.1791 },
    { name: 'Rhondda Cynon Taf', type: 'County', lat: 51.5833, lon: -3.4167 },
    { name: 'Merthyr Tydfil', type: 'County', lat: 51.7500, lon: -3.3833 },
    { name: 'Caerphilly', type: 'County', lat: 51.5833, lon: -3.2167 },
    { name: 'Blaenau Gwent', type: 'County', lat: 51.7833, lon: -3.2000 },
    { name: 'Torfaen', type: 'County', lat: 51.6667, lon: -3.0000 },
    { name: 'Monmouthshire', type: 'County', lat: 51.7500, lon: -2.7167 },

    // Scotland (Council Areas / Historic Counties)
    { name: 'Aberdeen City', type: 'County', lat: 57.1497, lon: -2.0943 },
    { name: 'Aberdeenshire', type: 'County', lat: 57.2000, lon: -2.3000 },
    { name: 'Angus', type: 'County', lat: 56.6500, lon: -2.8333 },
    { name: 'Argyll and Bute', type: 'County', lat: 56.0833, lon: -5.4167 },
    { name: 'Clackmannanshire', type: 'County', lat: 56.1167, lon: -3.7833 },
    { name: 'Dumfries and Galloway', type: 'County', lat: 55.0700, lon: -3.6040 },
    { name: 'Dundee City', type: 'County', lat: 56.4620, lon: -2.9707 },
    { name: 'East Ayrshire', type: 'County', lat: 55.4000, lon: -4.3833 },
    { name: 'East Dunbartonshire', type: 'County', lat: 55.9500, lon: -4.2000 },
    { name: 'East Lothian', type: 'County', lat: 55.9500, lon: -2.7833 },
    { name: 'East Renfrewshire', type: 'County', lat: 55.7833, lon: -4.3333 },
    { name: 'Edinburgh', type: 'County', lat: 55.9533, lon: -3.1883 },
    { name: 'Falkirk', type: 'County', lat: 56.0000, lon: -3.7833 },
    { name: 'Fife', type: 'County', lat: 56.1800, lon: -3.0500 },
    { name: 'Glasgow City', type: 'County', lat: 55.8642, lon: -4.2518 },
    { name: 'Highland', type: 'County', lat: 57.0000, lon: -4.0000 },
    { name: 'Inverclyde', type: 'County', lat: 55.9333, lon: -4.7667 },
    { name: 'Midlothian', type: 'County', lat: 55.8500, lon: -3.0833 },
    { name: 'Moray', type: 'County', lat: 57.6000, lon: -3.3000 },
    { name: 'North Ayrshire', type: 'County', lat: 55.6667, lon: -4.7667 },
    { name: 'North Lanarkshire', type: 'County', lat: 55.8667, lon: -3.9167 },
    { name: 'Orkney Islands', type: 'County', lat: 58.9500, lon: -3.0000 },
    { name: 'Perth and Kinross', type: 'County', lat: 56.4000, lon: -3.4500 },
    { name: 'Renfrewshire', type: 'County', lat: 55.8300, lon: -4.4800 },
    { name: 'Scottish Borders', type: 'County', lat: 55.5333, lon: -2.7167 },
    { name: 'Shetland Islands', type: 'County', lat: 60.4632, lon: -1.3080 },
    { name: 'South Ayrshire', type: 'County', lat: 55.3667, lon: -4.6667 },
    { name: 'South Lanarkshire', type: 'County', lat: 55.5667, lon: -3.8333 },
    { name: 'Stirling', type: 'County', lat: 56.1165, lon: -3.9369 },
    { name: 'West Dunbartonshire', type: 'County', lat: 55.9667, lon: -4.5833 },
    { name: 'West Lothian', type: 'County', lat: 55.9000, lon: -3.5833 },

    // Northern Ireland (Districts / Counties)
    { name: 'Antrim', type: 'County', lat: 54.7167, lon: -6.2167 },
    { name: 'Armagh', type: 'County', lat: 54.3510, lon: -6.6490 },
    { name: 'Down', type: 'County', lat: 54.3500, lon: -5.8333 },
    { name: 'Fermanagh', type: 'County', lat: 54.3667, lon: -7.6333 },
    { name: 'Londonderry', type: 'County', lat: 54.9970, lon: -7.3080 },
    { name: 'Tyrone', type: 'County', lat: 54.5833, lon: -7.3333 },

    { name: 'Bedfordshire', type: 'County', lat: 52.1350, lon: -0.4676 },
    { name: 'Berkshire', type: 'County', lat: 51.4667, lon: -1.0833 },
    { name: 'Bristol', type: 'County', lat: 51.4545, lon: -2.5879 },
    { name: 'Buckinghamshire', type: 'County', lat: 51.8333, lon: -0.9833 },
    { name: 'Cambridgeshire', type: 'County', lat: 52.3333, lon: 0.0000 },
    { name: 'Cheshire', type: 'County', lat: 53.2000, lon: -2.5167 },
    { name: 'City of London', type: 'County', lat: 51.5155, lon: -0.0922 },
    { name: 'Cornwall', type: 'County', lat: 50.4000, lon: -4.7000 },
    { name: 'Cumbria', type: 'County', lat: 54.5772, lon: -2.7975 },
    { name: 'Derbyshire', type: 'County', lat: 53.1167, lon: -1.5667 },
    { name: 'Devon', type: 'County', lat: 50.7000, lon: -3.5333 },
    { name: 'Dorset', type: 'County', lat: 50.8000, lon: -2.3500 },
    { name: 'Durham', type: 'County', lat: 54.7500, lon: -1.5667 },
    { name: 'East Riding of Yorkshire', type: 'County', lat: 53.9000, lon: -0.6000 },
    { name: 'East Sussex', type: 'County', lat: 50.9167, lon: 0.3333 },
    { name: 'Essex', type: 'County', lat: 51.7500, lon: 0.4676 },
    { name: 'Gloucestershire', type: 'County', lat: 51.8333, lon: -2.1667 },
    { name: 'Greater London', type: 'County', lat: 51.5099, lon: -0.1181 },
    { name: 'Greater Manchester', type: 'County', lat: 53.4808, lon: -2.2426 },
    { name: 'Hampshire', type: 'County', lat: 51.0000, lon: -1.3000 },
    { name: 'Herefordshire', type: 'County', lat: 52.0833, lon: -2.7500 },
    { name: 'Hertfordshire', type: 'County', lat: 51.8333, lon: -0.2083 },
    { name: 'Isle of Wight', type: 'County', lat: 50.7000, lon: -1.3000 },
    { name: 'Kent', type: 'County', lat: 51.1667, lon: 0.6667 },
    { name: 'Lancashire', type: 'County', lat: 53.8000, lon: -2.6000 },
    { name: 'Leicestershire', type: 'County', lat: 52.6333, lon: -1.1333 },
    { name: 'Lincolnshire', type: 'County', lat: 53.1667, lon: -0.0833 },
    { name: 'Merseyside', type: 'County', lat: 53.4667, lon: -2.9667 },
    { name: 'Norfolk', type: 'County', lat: 52.6667, lon: 1.0000 },
    { name: 'North Yorkshire', type: 'County', lat: 54.1667, lon: -1.3333 },
    { name: 'Northamptonshire', type: 'County', lat: 52.2500, lon: -0.9000 },
    { name: 'Northumberland', type: 'County', lat: 55.1667, lon: -2.0000 },
    { name: 'Nottinghamshire', type: 'County', lat: 53.1333, lon: -1.0000 },
    { name: 'Oxfordshire', type: 'County', lat: 51.7500, lon: -1.2500 },
    { name: 'Rutland', type: 'County', lat: 52.6667, lon: -0.6333 },
    { name: 'Shropshire', type: 'County', lat: 52.6333, lon: -2.7500 },
    { name: 'Somerset', type: 'County', lat: 51.0833, lon: -3.0000 },
    { name: 'South Yorkshire', type: 'County', lat: 53.4667, lon: -1.3333 },
    { name: 'Staffordshire', type: 'County', lat: 52.8333, lon: -2.0000 },
    { name: 'Suffolk', type: 'County', lat: 52.1667, lon: 1.0000 },
    { name: 'Surrey', type: 'County', lat: 51.2500, lon: -0.4167 },
    { name: 'Tyne and Wear', type: 'County', lat: 54.9667, lon: -1.6000 },
    { name: 'Warwickshire', type: 'County', lat: 52.2500, lon: -1.5833 },
    { name: 'West Midlands', type: 'County', lat: 52.4800, lon: -1.9025 },
    { name: 'West Sussex', type: 'County', lat: 50.9167, lon: -0.3333 },
    { name: 'West Yorkshire', type: 'County', lat: 53.8000, lon: -1.7500 },
    { name: 'Wiltshire', type: 'County', lat: 51.3333, lon: -1.9167 },
    { name: 'Worcestershire', type: 'County', lat: 52.2000, lon: -2.2000 },
  { name: 'Bath', type: 'City', lat: 51.3800, lon: -2.3600 },
  { name: 'Birmingham', type: 'City', lat: 52.4862, lon: -1.8904 },
  { name: 'Bradford', type: 'City', lat: 53.80, lon: -1.75 },
  { name: 'Brighton & Hove', type: 'City', lat: 50.8278, lon: -0.1528 },
  { name: 'Bristol', type: 'City', lat: 51.4545, lon: -2.5880 },
  { name: 'Cambridge', type: 'City', lat: 52.2053, lon: 0.1212 },
  { name: 'Canterbury', type: 'City', lat: 51.2799, lon: 1.0800 },
  { name: 'Carlisle', type: 'City', lat: 54.8910, lon: -2.9440 },
  { name: 'Chelmsford', type: 'City', lat: 51.7361, lon: 0.4798 },
  { name: 'Chester', type: 'City', lat: 53.1900, lon: -2.8900 },
  { name: 'Chichester', type: 'City', lat: 50.8365, lon: -0.7792 },
  { name: 'Coventry', type: 'City', lat: 52.4081, lon: -1.5106 },
  { name: 'Derby', type: 'City', lat: 52.9167, lon: -1.4667 },
  { name: 'Doncaster', type: 'City', lat: 53.5228, lon: -1.1288 },
  { name: 'Durham', type: 'City', lat: 54.7761, lon: -1.5733 },
  { name: 'Ely', type: 'City', lat: 52.3981, lon: 0.2622 },
  { name: 'Exeter', type: 'City', lat: 50.7167, lon: -3.5333 },
  { name: 'Gloucester', type: 'City', lat: 51.8644, lon: -2.2444 },
  { name: 'Hereford', type: 'City', lat: 52.0565, lon: -2.7160 },
  { name: 'Kingston upon Hull', type: 'City', lat: 53.7574, lon: -0.3368 },
  { name: 'Lancaster', type: 'City', lat: 54.0470, lon: -2.8010 },
  { name: 'Leeds', type: 'City', lat: 53.8008, lon: -1.5491 },
  { name: 'Leicester', type: 'City', lat: 52.6333, lon: -1.1333 },
  { name: 'Lichfield', type: 'City', lat: 52.6835, lon: -1.8265 },
  { name: 'Lincoln', type: 'City', lat: 53.2344, lon: -0.5386 },
  { name: 'Liverpool', type: 'City', lat: 53.4084, lon: -2.9916 },
  { name: 'London', type: 'City', lat: 51.5074, lon: -0.1278 },
  { name: 'Manchester', type: 'City', lat: 53.4808, lon: -2.2426 },
  { name: 'Milton Keynes', type: 'City', lat: 52.0406, lon: -0.7594 },
  { name: 'Newcastle upon Tyne', type: 'City', lat: 54.9783, lon: -1.6178 },
  { name: 'Norwich', type: 'City', lat: 52.6309, lon: 1.2974 },
  { name: 'Nottingham', type: 'City', lat: 52.9548, lon: -1.1581 },
  { name: 'Oxford', type: 'City', lat: 51.7520, lon: -1.2577 },
  { name: 'Peterborough', type: 'City', lat: 52.5739, lon: -0.2508 },
  { name: 'Plymouth', type: 'City', lat: 50.3763, lon: -4.1438 },
  { name: 'Portsmouth', type: 'City', lat: 50.8058, lon: -1.0872 },
  { name: 'Preston', type: 'City', lat: 53.7632, lon: -2.7031 },
  { name: 'Ripon', type: 'City', lat: 54.1380, lon: -1.5240 },
  { name: 'Salford', type: 'City', lat: 53.4830, lon: -2.2931 },
  { name: 'Salisbury', type: 'City', lat: 51.3830, lon: -1.7980 },
  { name: 'Sheffield', type: 'City', lat: 53.3833, lon: -1.4667 },
  { name: 'Southampton', type: 'City', lat: 50.9097, lon: -1.4044 },
  { name: 'Southend-on-Sea', type: 'City', lat: 51.5378, lon: 0.7140 },
  { name: 'St Albans', type: 'City', lat: 51.7550, lon: -0.3360 },
  { name: 'St Asaph', type: 'City', lat: 53.2830, lon: -3.5080 },
  { name: 'St Davids', type: 'City', lat: 51.8820, lon: -5.2690 },
  { name: 'Wakefield', type: 'City', lat: 53.6800, lon: -1.4900 },
  { name: 'Wells', type: 'City', lat: 51.2090, lon: -2.6470 },
  { name: 'Westminster', type: 'City', lat: 51.4975, lon: -0.1357 },
  { name: 'Winchester', type: 'City', lat: 51.0632, lon: -1.3080 },
  { name: 'Wolverhampton', type: 'City', lat: 52.5870, lon: -2.1280 },
  { name: 'Worcester', type: 'City', lat: 52.1920, lon: -2.2200 },
  { name: 'York', type: 'City', lat: 53.9583, lon: -1.0803 },

  // Northern Ireland
  { name: 'Armagh', type: 'City', lat: 54.3510, lon: -6.6490 },
  { name: 'Bangor (NI)', type: 'City', lat: 54.6600, lon: -5.6670 },
  { name: 'Lisburn', type: 'City', lat: 54.5198, lon: -6.0370 },
  { name: 'Londonderry', type: 'City', lat: 54.9970, lon: -7.3080 },
  { name: 'Newry', type: 'City', lat: 54.1830, lon: -6.3330 },

  // Scotland
  { name: 'Aberdeen', type: 'City', lat: 57.1497, lon: -2.0943 },
  { name: 'Dundee', type: 'City', lat: 56.4620, lon: -2.9707 },
  { name: 'Dunfermline', type: 'City', lat: 56.0710, lon: -3.4540 },
  { name: 'Edinburgh', type: 'City', lat: 55.9533, lon: -3.1883 },
  { name: 'Glasgow', type: 'City', lat: 55.8642, lon: -4.2518 },
  { name: 'Inverness', type: 'City', lat: 57.4778, lon: -4.2247 },
  { name: 'Perth', type: 'City', lat: 56.3969, lon: -3.4370 },
  { name: 'Stirling', type: 'City', lat: 56.1165, lon: -3.9369 },

  // Wales
  { name: 'Bangor (Wales)', type: 'City', lat: 53.2270, lon: -4.1290 },
  { name: 'Cardiff', type: 'City', lat: 51.4816, lon: -3.1791 },
  { name: 'Newport (Wales)', type: 'City', lat: 51.5842, lon: -2.9977 },
  { name: 'Swansea', type: 'City', lat: 51.6214, lon: -3.9436 },
  { name: 'Wrexham', type: 'City', lat: 53.0462, lon: -2.9928 },

    //  Well-known towns / commuter hubs
  { name: 'Cambridge', type: 'City', lat: 52.2053, lon: 0.1218 },
  { name: 'Oxford', type: 'City', lat: 51.7520, lon: -1.2577 },
  { name: 'Reading', type: 'Town', lat: 51.4543, lon: -0.9781 },
  { name: 'Norwich', type: 'City', lat: 52.6309, lon: 1.2974 },

  //  Counties (ceremonial / historic)
  { name: 'Cornwall', type: 'County', lat: 50.5039, lon: -4.8701 },
  { name: 'Devon', type: 'County', lat: 50.7184, lon: -3.5339 },
  { name: 'Somerset', type: 'County', lat: 51.0728, lon: -2.2710 },
  { name: 'Dorset', type: 'County', lat: 50.7488, lon: -2.3399 },
  { name: 'Wiltshire', type: 'County', lat: 51.3544, lon: -2.3774 },
  { name: 'Hampshire', type: 'County', lat: 51.0577, lon: -1.3080 },
  { name: 'Kent', type: 'County', lat: 51.2787, lon: 0.5218 },
  { name: 'Surrey', type: 'County', lat: 51.2362, lon: -0.5704 },
  { name: 'East Sussex', type: 'County', lat: 50.9360, lon: 0.2790 },
  { name: 'West Sussex', type: 'County', lat: 50.9080, lon: -0.5547 },
  { name: 'Essex', type: 'County', lat: 51.5978, lon: 0.3382 },
  { name: 'Hertfordshire', type: 'County', lat: 51.8334, lon: -0.2618 },
  { name: 'Cambridgeshire', type: 'County', lat: 52.2053, lon: 0.1218 },
  { name: 'Lincolnshire', type: 'County', lat: 53.0000, lon: -0.6000 },
  { name: 'Norfolk', type: 'County', lat: 52.6309, lon: 1.2974 },
  { name: 'Suffolk', type: 'County', lat: 52.0000, lon: 1.0000 },
  { name: 'Surrey', type: 'County', lat: 51.2362, lon: -0.5704 },
  { name: 'West Midlands', type: 'County', lat: 52.4862, lon: -1.8904 },
  { name: 'Greater Manchester', type: 'County', lat: 53.4808, lon: -2.2426 },
  { name: 'Lancashire', type: 'County', lat: 53.7632, lon: -2.7031 },
  { name: 'Yorkshire', type: 'County', lat: 53.9915, lon: -1.5418 },
  { name: 'North Yorkshire', type: 'County', lat: 54.2679, lon: -0.4940 },
  { name: 'South Yorkshire', type: 'County', lat: 53.4700, lon: -1.3500 },
  { name: 'West Midlands (county)', type: 'County', lat: 52.5200, lon: -1.5240 },
  { name: 'Shropshire', type: 'County', lat: 52.7099, lon: -2.7550 },
  { name: 'Staffordshire', type: 'County', lat: 52.7870, lon: -2.1250 },
  { name: 'Herefordshire', type: 'County', lat: 52.0833, lon: -2.7167 },
  { name: 'Worcestershire', type: 'County', lat: 52.1924, lon: -2.2215 },
  { name: 'Gloucestershire', type: 'County', lat: 51.8642, lon: -2.2382 },
  { name: 'Oxfordshire', type: 'County', lat: 51.7520, lon: -1.2577 },
  { name: 'Powys', type: 'County', lat: 52.5400, lon: -3.3800 },        // Wales
  { name: 'Gwynedd', type: 'County', lat: 53.0830, lon: -4.0830 },      // Wales
  { name: 'Clwyd', type: 'County', lat: 53.0000, lon: -3.5000 },        // Wales
  { name: 'Dyfed', type: 'County', lat: 52.1000, lon: -4.3000 },        // Wales
  { name: 'Fife', type: 'County', lat: 56.1800, lon: -3.0500 },         // Scotland
  { name: 'Highland', type: 'County', lat: 57.0000, lon: -4.0000 },     // Scotland
  { name: 'Aberdeenshire', type: 'County', lat: 57.2000, lon: -2.3000 },// Scotland
  { name: 'Renfrewshire', type: 'County', lat: 55.8300, lon: -4.4800 }, // Scotland
  { name: 'Shetland Islands', type: 'County', lat: 60.4632, lon: -1.3080 }, // Scotland

  // South East & East of England
  { name: 'Reading', type: 'Town', lat: 51.4543, lon: -0.9781 },
  { name: 'Luton', lat: 51.8787, lon: -0.4200, type: 'Town' },
  { name: 'Slough', lat: 51.5105, lon: -0.5954, type: 'Town' },
  { name: 'Maidenhead', lat: 51.5220, lon: -0.7190, type: 'Town' },
  { name: 'Bracknell', lat: 51.4160, lon: -0.7530, type: 'Town' },
  { name: 'Wokingham', lat: 51.4100, lon: -0.8330, type: 'Town' },
  { name: 'High Wycombe', lat: 51.6286, lon: -0.7482, type: 'Town' },
  { name: 'Aylesbury', lat: 51.8167, lon: -0.8125, type: 'Town' },
  { name: 'Hemel Hempstead', lat: 51.7537, lon: -0.4498, type: 'Town' },
  { name: 'Watford', lat: 51.6565, lon: -0.3903, type: 'Town' },
  { name: 'Stevenage', lat: 51.9038, lon: -0.1966, type: 'Town' },
  { name: 'Hitchin', lat: 51.9475, lon: -0.2787, type: 'Town' },
  { name: 'Letchworth', lat: 51.9790, lon: -0.2260, type: 'Town' },
  { name: 'St Neots', lat: 52.2280, lon: -0.2670, type: 'Town' },
  { name: 'Huntingdon', lat: 52.3305, lon: -0.1826, type: 'Town' },
  { name: 'Bishop’s Stortford', lat: 51.8726, lon: 0.1586, type: 'Town' },
  { name: 'Harlow', lat: 51.7720, lon: 0.1020, type: 'Town' },
  { name: 'Brentwood', lat: 51.6220, lon: 0.3050, type: 'Town' },
  { name: 'Braintree', lat: 51.8780, lon: 0.5520, type: 'Town' },
  { name: 'Clacton-on-Sea', lat: 51.7890, lon: 1.1550, type: 'Town' },
  { name: 'Harwich', lat: 51.9450, lon: 1.2850, type: 'Town' },
  { name: 'Basildon', lat: 51.5714, lon: 0.4678, type: 'Town' },
  { name: 'Southend (city—excluded)' , type:'Town', lat:0, lon:0 }, // reminder
  { name: 'Grays', lat: 51.4760, lon: 0.3250, type: 'Town' },
  { name: 'Dartford', lat: 51.4462, lon: 0.2167, type: 'Town' },
  { name: 'Gravesend', lat: 51.4416, lon: 0.3665, type: 'Town' },
  { name: 'Sevenoaks', lat: 51.2726, lon: 0.1900, type: 'Town' },
  { name: 'Tonbridge', lat: 51.1950, lon: 0.2730, type: 'Town' },
  { name: 'Royal Tunbridge Wells', lat: 51.1324, lon: 0.2636, type: 'Town' },
  { name: 'Maidstone', lat: 51.2726, lon: 0.5141, type: 'Town' },
  { name: 'Sittingbourne', lat: 51.3410, lon: 0.7340, type: 'Town' },
  { name: 'Chatham', lat: 51.3800, lon: 0.5270, type: 'Town' },
  { name: 'Gillingham (Kent)', lat: 51.3860, lon: 0.5510, type: 'Town' },
  { name: 'Rochester', lat: 51.3880, lon: 0.5050, type: 'Town' },
  { name: 'Ashford (Kent)', lat: 51.1465, lon: 0.8732, type: 'Town' },
  { name: 'Folkestone', lat: 51.0814, lon: 1.1690, type: 'Town' },
  { name: 'Dover', lat: 51.1290, lon: 1.3080, type: 'Town' },
  { name: 'Deal', lat: 51.2230, lon: 1.4040, type: 'Town' },
  { name: 'Margate', lat: 51.3850, lon: 1.3860, type: 'Town' },
  { name: 'Ramsgate', lat: 51.3360, lon: 1.4190, type: 'Town' },
  { name: 'Whitstable', lat: 51.3600, lon: 1.0250, type: 'Town' },
  { name: 'Herne Bay', lat: 51.3730, lon: 1.1280, type: 'Town' },
  { name: 'Guildford', lat: 51.2362, lon: -0.5704, type: 'Town' },
  { name: 'Woking', lat: 51.3190, lon: -0.5589, type: 'Town' },
  { name: 'Epsom', lat: 51.3340, lon: -0.2700, type: 'Town' },
  { name: 'Redhill', lat: 51.2400, lon: -0.1700, type: 'Town' },
  { name: 'Reigate', lat: 51.2370, lon: -0.2050, type: 'Town' },
  { name: 'Crawley', lat: 51.1140, lon: -0.1870, type: 'Town' },
  { name: 'Horsham', lat: 51.0620, lon: -0.3270, type: 'Town' },
  { name: 'Worthing', lat: 50.8140, lon: -0.3710, type: 'Town' },
  { name: 'Littlehampton', lat: 50.8090, lon: -0.5410, type: 'Town' },
  { name: 'Bognor Regis', lat: 50.7830, lon: -0.6760, type: 'Town' },
  { name: 'Eastbourne', lat: 50.7680, lon: 0.2905, type: 'Town' },
  { name: 'Hastings', lat: 50.8543, lon: 0.5760, type: 'Town' },
  { name: 'Lowestoft', lat: 52.4750, lon: 1.7480, type: 'Town' },
  { name: 'Great Yarmouth', lat: 52.6070, lon: 1.7300, type: 'Town' },
  { name: "King's Lynn", lat: 52.7517, lon: 0.4044, type: 'Town' },
  { name: 'Thetford', lat: 52.4150, lon: 0.7480, type: 'Town' },
  { name: 'Bury St Edmunds', lat: 52.2436, lon: 0.7110, type: 'Town' },
  { name: 'Newmarket', lat: 52.2440, lon: 0.4040, type: 'Town' },

  // South West
  { name: 'Swindon', lat: 51.5560, lon: -1.7792, type: 'Town' },
  { name: 'Chippenham', lat: 51.4600, lon: -2.1150, type: 'Town' },
  { name: 'Trowbridge', lat: 51.3180, lon: -2.2080, type: 'Town' },
  { name: 'Frome', lat: 51.2310, lon: -2.3200, type: 'Town' },
  { name: 'Weston-super-Mare', lat: 51.3460, lon: -2.9770, type: 'Town' },
  { name: 'Bridgwater', lat: 51.1279, lon: -3.0036, type: 'Town' },
  { name: 'Taunton', lat: 51.0140, lon: -3.1030, type: 'Town' },
  { name: 'Yeovil', lat: 50.9430, lon: -2.6330, type: 'Town' },
  { name: 'Dorchester', lat: 50.7150, lon: -2.4370, type: 'Town' },
  { name: 'Weymouth', lat: 50.6130, lon: -2.4570, type: 'Town' },
  { name: 'Bournemouth', lat: 50.7216, lon: -1.8782, type: 'Town' },
  { name: 'Poole', lat: 50.7150, lon: -1.9870, type: 'Town' },
  { name: 'Christchurch (Dorset)', lat: 50.7340, lon: -1.7810, type: 'Town' },
  { name: 'Exmouth', lat: 50.6210, lon: -3.4130, type: 'Town' },
  { name: 'Newton Abbot', lat: 50.5300, lon: -3.6110, type: 'Town' },
  { name: 'Torquay', lat: 50.4619, lon: -3.5253, type: 'Town' },
  { name: 'Paignton', lat: 50.4370, lon: -3.5670, type: 'Town' },
  { name: 'Barnstaple', lat: 51.0800, lon: -4.0580, type: 'Town' },
  { name: 'Bideford', lat: 51.0170, lon: -4.2080, type: 'Town' },
  { name: 'Tiverton', lat: 50.9020, lon: -3.4900, type: 'Town' },
  { name: 'St Austell', lat: 50.3390, lon: -4.7930, type: 'Town' },
  { name: 'Newquay', lat: 50.4150, lon: -5.0740, type: 'Town' },
  { name: 'Falmouth', lat: 50.1510, lon: -5.0700, type: 'Town' },
  { name: 'Penzance', lat: 50.1180, lon: -5.5370, type: 'Town' },
  { name: 'Camborne', lat: 50.2130, lon: -5.2970, type: 'Town' },
  { name: 'Redruth', lat: 50.2340, lon: -5.2260, type: 'Town' },

  // West Midlands & surrounding
  { name: 'Solihull', lat: 52.4128, lon: -1.7782, type: 'Town' },
  { name: 'Dudley', lat: 52.5123, lon: -2.0810, type: 'Town' },
  { name: 'West Bromwich', lat: 52.5187, lon: -1.9945, type: 'Town' },
  { name: 'Walsall', lat: 52.5862, lon: -1.9829, type: 'Town' },
  { name: 'Sutton Coldfield', lat: 52.5667, lon: -1.8167, type: 'Town' },
  { name: 'Redditch', lat: 52.3065, lon: -1.9457, type: 'Town' },
  { name: 'Kidderminster', lat: 52.3880, lon: -2.2500, type: 'Town' },
  { name: 'Bromsgrove', lat: 52.3340, lon: -2.0580, type: 'Town' },
  { name: 'Nuneaton', lat: 52.5232, lon: -1.4689, type: 'Town' },
  { name: 'Bedworth', lat: 52.4790, lon: -1.4690, type: 'Town' },
  { name: 'Rugby', lat: 52.3709, lon: -1.2640, type: 'Town' },
  { name: 'Royal Leamington Spa', lat: 52.2900, lon: -1.5350, type: 'Town' },
  { name: 'Warwick', lat: 52.2819, lon: -1.5845, type: 'Town' },
  { name: 'Stratford-upon-Avon', lat: 52.1917, lon: -1.7073, type: 'Town' },
  { name: 'Stafford', lat: 52.8060, lon: -2.1160, type: 'Town' },
  { name: 'Cannock', lat: 52.6900, lon: -2.0300, type: 'Town' },
  { name: 'Tamworth', lat: 52.6336, lon: -1.6959, type: 'Town' },
  { name: 'Burton upon Trent', lat: 52.8060, lon: -1.6360, type: 'Town' },
  { name: 'Telford', lat: 52.6766, lon: -2.4493, type: 'Town' },
  { name: 'Shrewsbury', lat: 52.7073, lon: -2.7540, type: 'Town' },
  { name: 'Newcastle-under-Lyme', lat: 53.0128, lon: -2.2274, type: 'Town' },

  // North West
  { name: 'Warrington', lat: 53.3900, lon: -2.5960, type: 'Town' },
  { name: 'Wigan', lat: 53.5444, lon: -2.6316, type: 'Town' },
  { name: 'Bolton', lat: 53.5769, lon: -2.4280, type: 'Town' },
  { name: 'Bury', lat: 53.5933, lon: -2.2973, type: 'Town' },
  { name: 'Oldham', lat: 53.5410, lon: -2.1120, type: 'Town' },
  { name: 'Rochdale', lat: 53.6164, lon: -2.1552, type: 'Town' },
  { name: 'Ashton-under-Lyne', lat: 53.4890, lon: -2.0980, type: 'Town' },
  { name: 'Stockport', lat: 53.4085, lon: -2.1497, type: 'Town' },
  { name: 'Sale', lat: 53.4240, lon: -2.3220, type: 'Town' },
  { name: 'Altrincham', lat: 53.3870, lon: -2.3490, type: 'Town' },
  { name: 'St Helens', lat: 53.4530, lon: -2.7370, type: 'Town' },
  { name: 'Runcorn', lat: 53.3410, lon: -2.7130, type: 'Town' },
  { name: 'Widnes', lat: 53.3640, lon: -2.7340, type: 'Town' },
  { name: 'Ellesmere Port', lat: 53.2790, lon: -2.8970, type: 'Town' },
  { name: 'Southport', lat: 53.6470, lon: -3.0060, type: 'Town' },
  { name: 'Birkenhead', lat: 53.3930, lon: -3.0140, type: 'Town' },
  { name: 'Wallasey', lat: 53.4230, lon: -3.0640, type: 'Town' },
  { name: 'Bootle', lat: 53.4510, lon: -3.0040, type: 'Town' },
  { name: 'Blackpool', lat: 53.8142, lon: -3.0500, type: 'Town' },
  { name: 'Fleetwood', lat: 53.9250, lon: -3.0100, type: 'Town' },
  { name: 'Morecambe', lat: 54.0670, lon: -2.8670, type: 'Town' },
  { name: 'Barrow-in-Furness', lat: 54.1100, lon: -3.2270, type: 'Town' },
  { name: 'Workington', lat: 54.6420, lon: -3.5480, type: 'Town' },
  { name: 'Whitehaven', lat: 54.5470, lon: -3.5920, type: 'Town' },
  { name: 'Kendal', lat: 54.3280, lon: -2.7460, type: 'Town' },
  { name: 'Penrith', lat: 54.6650, lon: -2.7580, type: 'Town' },

  // Yorkshire & Humber
  { name: 'Huddersfield', lat: 53.6452, lon: -1.7855, type: 'Town' },
  { name: 'Halifax', lat: 53.7226, lon: -1.8636, type: 'Town' },
  { name: 'Dewsbury', lat: 53.6900, lon: -1.6300, type: 'Town' },
  { name: 'Batley', lat: 53.7160, lon: -1.6330, type: 'Town' },
  { name: 'Brighouse', lat: 53.7030, lon: -1.7800, type: 'Town' },
  { name: 'Keighley', lat: 53.8680, lon: -1.9120, type: 'Town' },
  { name: 'Shipley', lat: 53.8340, lon: -1.7730, type: 'Town' },
  { name: 'Ilkley', lat: 53.9250, lon: -1.8230, type: 'Town' },
  { name: 'Harrogate', lat: 53.9921, lon: -1.5418, type: 'Town' },
  { name: 'Knaresborough', lat: 54.0090, lon: -1.4680, type: 'Town' },
  { name: 'Selby', lat: 53.7830, lon: -1.0640, type: 'Town' },
  { name: 'Goole', lat: 53.7040, lon: -0.8770, type: 'Town' },
  { name: 'Pontefract', lat: 53.6920, lon: -1.3120, type: 'Town' },
  { name: 'Castleford', lat: 53.7250, lon: -1.3560, type: 'Town' },
  { name: 'Barnsley', lat: 53.5530, lon: -1.4790, type: 'Town' },
  { name: 'Rotherham', lat: 53.4300, lon: -1.3570, type: 'Town' },
  { name: 'Scunthorpe', lat: 53.5860, lon: -0.6540, type: 'Town' },
  { name: 'Grimsby', lat: 53.5650, lon: -0.0870, type: 'Town' },
  { name: 'Cleethorpes', lat: 53.5610, lon: -0.0320, type: 'Town' },
  { name: 'Beverley', lat: 53.8420, lon: -0.4350, type: 'Town' },
  { name: 'Driffield', lat: 54.0070, lon: -0.4400, type: 'Town' },
  { name: 'Bridlington', lat: 54.0830, lon: -0.1920, type: 'Town' },
  { name: 'Scarborough', lat: 54.2800, lon: -0.4030, type: 'Town' },
  { name: 'Whitby', lat: 54.4860, lon: -0.6140, type: 'Town' },
  { name: 'Middlesbrough', lat: 54.5742, lon: -1.2350, type: 'Town' },
  { name: 'Redcar', lat: 54.6160, lon: -1.0650, type: 'Town' },
  { name: 'Thornaby', lat: 54.5340, lon: -1.2910, type: 'Town' },
  { name: 'Ingleby Barwick', lat: 54.5280, lon: -1.3150, type: 'Town' },
  { name: 'Yarm', lat: 54.5060, lon: -1.3560, type: 'Town' },
  { name: 'Hartlepool', lat: 54.6860, lon: -1.2120, type: 'Town' },
  { name: 'Stockton-on-Tees', lat: 54.5700, lon: -1.3180, type: 'Town' },

  // North East
  { name: 'Gateshead', lat: 54.9620, lon: -1.6010, type: 'Town' },
  { name: 'South Shields', lat: 54.9880, lon: -1.4240, type: 'Town' },
  { name: 'North Shields', lat: 55.0100, lon: -1.4490, type: 'Town' },
  { name: 'Tynemouth', lat: 55.0170, lon: -1.4250, type: 'Town' },
  { name: 'Whitley Bay', lat: 55.0420, lon: -1.4450, type: 'Town' },
  { name: 'Jarrow', lat: 54.9800, lon: -1.4900, type: 'Town' },
  { name: 'Hebburn', lat: 54.9730, lon: -1.5170, type: 'Town' },
  { name: 'Washington', lat: 54.9030, lon: -1.5160, type: 'Town' },
  { name: 'Consett', lat: 54.8530, lon: -1.8340, type: 'Town' },
  { name: 'Stanley (Durham)', lat: 54.8680, lon: -1.6980, type: 'Town' },
  { name: 'Bishop Auckland', lat: 54.6630, lon: -1.6770, type: 'Town' },
  { name: 'Newton Aycliffe', lat: 54.6140, lon: -1.5710, type: 'Town' },
  { name: 'Peterlee', lat: 54.7580, lon: -1.3350, type: 'Town' },
  { name: 'Seaham', lat: 54.8390, lon: -1.3450, type: 'Town' },

  // East Midlands
  { name: 'Northampton', lat: 52.2405, lon: -0.9027, type: 'Town' },
  { name: 'Kettering', lat: 52.3980, lon: -0.7250, type: 'Town' },
  { name: 'Corby', lat: 52.4895, lon: -0.6997, type: 'Town' },
  { name: 'Wellingborough', lat: 52.3027, lon: -0.6946, type: 'Town' },
  { name: 'Rushden', lat: 52.2900, lon: -0.6010, type: 'Town' },
  { name: 'Daventry', lat: 52.2570, lon: -1.1600, type: 'Town' },
  { name: 'Hinckley', lat: 52.5410, lon: -1.3720, type: 'Town' },
  { name: 'Coalville', lat: 52.7240, lon: -1.3710, type: 'Town' },
  { name: 'Loughborough', lat: 52.7721, lon: -1.2062, type: 'Town' },
  { name: 'Melton Mowbray', lat: 52.7640, lon: -0.8860, type: 'Town' },
  { name: 'Mansfield', lat: 53.1440, lon: -1.1990, type: 'Town' },
  { name: 'Worksop', lat: 53.3050, lon: -1.1250, type: 'Town' },
  { name: 'Newark-on-Trent', lat: 53.0760, lon: -0.8060, type: 'Town' },
  { name: 'Retford', lat: 53.3220, lon: -0.9450, type: 'Town' },
  { name: 'Grantham', lat: 52.9140, lon: -0.6420, type: 'Town' },
  { name: 'Boston', lat: 52.9780, lon: -0.0230, type: 'Town' },
  { name: 'Skegness', lat: 53.1440, lon: 0.3400, type: 'Town' },
  { name: 'Sleaford', lat: 52.9970, lon: -0.4100, type: 'Town' },
  { name: 'Chesterfield', lat: 53.2350, lon: -1.4260, type: 'Town' },

  // Wales
  { name: 'Barry', lat: 51.4040, lon: -3.2830, type: 'Town' },
  { name: 'Bridgend', lat: 51.5050, lon: -3.5770, type: 'Town' },
  { name: 'Merthyr Tydfil', lat: 51.7460, lon: -3.3790, type: 'Town' },
  { name: 'Pontypridd', lat: 51.6010, lon: -3.3420, type: 'Town' },
  { name: 'Cwmbran', lat: 51.6530, lon: -3.0210, type: 'Town' },
  { name: 'Pontypool', lat: 51.7010, lon: -3.0440, type: 'Town' },
  { name: 'Ebbw Vale', lat: 51.7770, lon: -3.2070, type: 'Town' },
  { name: 'Abergavenny', lat: 51.8230, lon: -3.0190, type: 'Town' },
  { name: 'Monmouth', lat: 51.8120, lon: -2.7140, type: 'Town' },
  { name: 'Caerphilly', lat: 51.5740, lon: -3.2190, type: 'Town' },
  { name: 'Newport (Wales) — city excluded', type:'Town', lat:0, lon:0 },
  { name: 'Llanelli', lat: 51.6810, lon: -4.1590, type: 'Town' },
  { name: 'Neath', lat: 51.6630, lon: -3.8040, type: 'Town' },
  { name: 'Port Talbot', lat: 51.5920, lon: -3.7830, type: 'Town' },
  { name: 'Porthcawl', lat: 51.4800, lon: -3.7030, type: 'Town' },
  { name: 'Aberdare', lat: 51.7140, lon: -3.4490, type: 'Town' },
  { name: 'Mountain Ash', lat: 51.6810, lon: -3.3790, type: 'Town' },
  { name: 'Carmarthen', lat: 51.8570, lon: -4.3110, type: 'Town' },
  { name: 'Haverfordwest', lat: 51.8010, lon: -4.9690, type: 'Town' },
  { name: 'Pembroke Dock', lat: 51.6910, lon: -4.9410, type: 'Town' },
  { name: 'Milford Haven', lat: 51.7130, lon: -5.0390, type: 'Town' },
  { name: 'Aberystwyth', lat: 52.4150, lon: -4.0820, type: 'Town' },
  { name: 'Newtown (Powys)', lat: 52.5130, lon: -3.3140, type: 'Town' },
  { name: 'Brecon', lat: 51.9470, lon: -3.3910, type: 'Town' },
  { name: 'Rhyl', lat: 53.3190, lon: -3.4920, type: 'Town' },
  { name: 'Prestatyn', lat: 53.3370, lon: -3.4070, type: 'Town' },
  { name: 'Colwyn Bay', lat: 53.2950, lon: -3.7260, type: 'Town' },
  { name: 'Llandudno', lat: 53.3240, lon: -3.8270, type: 'Town' },
  { name: 'Holyhead', lat: 53.3110, lon: -4.6310, type: 'Town' },

  // Scotland
  { name: 'Paisley', lat: 55.8471, lon: -4.4401, type: 'Town' },
  { name: 'Greenock', lat: 55.9480, lon: -4.7610, type: 'Town' },
  { name: 'Port Glasgow', lat: 55.9340, lon: -4.6890, type: 'Town' },
  { name: 'Johnstone', lat: 55.8330, lon: -4.5160, type: 'Town' },
  { name: 'Renfrew', lat: 55.8720, lon: -4.3920, type: 'Town' },
  { name: 'Ayr', lat: 55.4586, lon: -4.6292, type: 'Town' },
  { name: 'Kilmarnock', lat: 55.6110, lon: -4.4950, type: 'Town' },
  { name: 'Irvine', lat: 55.6130, lon: -4.6690, type: 'Town' },
  { name: 'Saltcoats', lat: 55.6350, lon: -4.7850, type: 'Town' },
  { name: 'Ardrossan', lat: 55.6400, lon: -4.8140, type: 'Town' },
  { name: 'Stevenston', lat: 55.6390, lon: -4.7500, type: 'Town' },
  { name: 'Troon', lat: 55.5420, lon: -4.6630, type: 'Town' },
  { name: 'East Kilbride', lat: 55.7640, lon: -4.1760, type: 'Town' },
  { name: 'Hamilton', lat: 55.7770, lon: -4.0360, type: 'Town' },
  { name: 'Motherwell', lat: 55.7890, lon: -3.9910, type: 'Town' },
  { name: 'Wishaw', lat: 55.7730, lon: -3.9200, type: 'Town' },
  { name: 'Coatbridge', lat: 55.8640, lon: -4.0380, type: 'Town' },
  { name: 'Airdrie', lat: 55.8660, lon: -3.9820, type: 'Town' },
  { name: 'Cumbernauld', lat: 55.9460, lon: -3.9900, type: 'Town' },
  { name: 'Falkirk', lat: 56.0010, lon: -3.7840, type: 'Town' },
  { name: 'Grangemouth', lat: 56.0190, lon: -3.7210, type: 'Town' },
  { name: 'Alloa', lat: 56.1140, lon: -3.7890, type: 'Town' },
  { name: 'Kirkcaldy', lat: 56.1100, lon: -3.1610, type: 'Town' },
  { name: 'Glenrothes', lat: 56.2000, lon: -3.1730, type: 'Town' },
  { name: 'Leven', lat: 56.1950, lon: -3.0030, type: 'Town' },
  { name: 'Cowdenbeath', lat: 56.1110, lon: -3.3430, type: 'Town' },
  { name: 'Arbroath', lat: 56.5610, lon: -2.5810, type: 'Town' },
  { name: 'Montrose', lat: 56.7160, lon: -2.4680, type: 'Town' },
  { name: 'Forfar', lat: 56.6430, lon: -2.8880, type: 'Town' },
  { name: 'Brechin', lat: 56.7340, lon: -2.6580, type: 'Town' },
  { name: 'Peterhead', lat: 57.5050, lon: -1.8050, type: 'Town' },
  { name: 'Fraserburgh', lat: 57.6930, lon: -2.0100, type: 'Town' },
  { name: 'Ellon', lat: 57.3640, lon: -2.0730, type: 'Town' },
  { name: 'Inverurie', lat: 57.2860, lon: -2.3730, type: 'Town' },
  { name: 'Stonehaven', lat: 56.9630, lon: -2.2130, type: 'Town' },
  { name: 'Elgin', lat: 57.6490, lon: -3.3180, type: 'Town' },
  { name: 'Nairn', lat: 57.5800, lon: -3.8800, type: 'Town' },
  { name: 'Fort William', lat: 56.8198, lon: -5.1052, type: 'Town' },
  { name: 'Oban', lat: 56.4150, lon: -5.4710, type: 'Town' },
  { name: 'Campbeltown', lat: 55.4250, lon: -5.6070, type: 'Town' },
  { name: 'Rothesay', lat: 55.8350, lon: -5.0550, type: 'Town' },
  { name: 'Dumbarton', lat: 55.9440, lon: -4.5700, type: 'Town' },
  { name: 'Helensburgh', lat: 56.0050, lon: -4.7360, type: 'Town' },
  { name: 'Clydebank', lat: 55.9010, lon: -4.4040, type: 'Town' },
  { name: 'Milngavie', lat: 55.9410, lon: -4.3230, type: 'Town' },
  { name: 'Bearsden', lat: 55.9200, lon: -4.3320, type: 'Town' },
  { name: 'Livingston', lat: 55.8830, lon: -3.5220, type: 'Town' },
  { name: 'Bathgate', lat: 55.9020, lon: -3.6430, type: 'Town' },
  { name: 'Musselburgh', lat: 55.9410, lon: -3.0490, type: 'Town' },
  { name: 'Haddington', lat: 55.9570, lon: -2.7830, type: 'Town' },
  { name: 'Galashiels', lat: 55.6170, lon: -2.8060, type: 'Town' },
  { name: 'Hawick', lat: 55.4230, lon: -2.7860, type: 'Town' },
  { name: 'Peebles', lat: 55.6510, lon: -3.1880, type: 'Town' },
  { name: 'Kelso', lat: 55.5980, lon: -2.4330, type: 'Town' },
  { name: 'Selkirk', lat: 55.5470, lon: -2.8400, type: 'Town' },
  { name: 'St Andrews', lat: 56.3398, lon: -2.7967, type: 'Town' },
  { name: 'Cupar', lat: 56.3180, lon: -3.0120, type: 'Town' },

  // Northern Ireland
  { name: 'Newtownabbey', lat: 54.6780, lon: -5.9080, type: 'Town' },
  { name: 'Carrickfergus', lat: 54.7180, lon: -5.8100, type: 'Town' },
  { name: 'Larne', lat: 54.8530, lon: -5.8230, type: 'Town' },
  { name: 'Ballymena', lat: 54.8650, lon: -6.2790, type: 'Town' },
  { name: 'Ballymoney', lat: 55.0700, lon: -6.5170, type: 'Town' },
  { name: 'Coleraine', lat: 55.1320, lon: -6.6680, type: 'Town' },
  { name: 'Limavady', lat: 55.0500, lon: -6.9500, type: 'Town' },
  { name: 'Magherafelt', lat: 54.7560, lon: -6.6080, type: 'Town' },
  { name: 'Cookstown', lat: 54.6450, lon: -6.7450, type: 'Town' },
  { name: 'Dungannon', lat: 54.5040, lon: -6.7670, type: 'Town' },
  { name: 'Omagh', lat: 54.5990, lon: -7.3040, type: 'Town' },
  { name: 'Enniskillen', lat: 54.3470, lon: -7.6430, type: 'Town' },
  { name: 'Strabane', lat: 54.8270, lon: -7.4630, type: 'Town' },
  { name: 'Lurgan', lat: 54.4670, lon: -6.3340, type: 'Town' },
  { name: 'Portadown', lat: 54.4240, lon: -6.4440, type: 'Town' },
  { name: 'Craigavon', lat: 54.4500, lon: -6.3920, type: 'Town' },
  { name: 'Banbridge', lat: 54.3500, lon: -6.2750, type: 'Town' },
  { name: 'Newtownards', lat: 54.5920, lon: -5.6950, type: 'Town' }



];

const refCities = [
  { name: "Lands End", lat: 50.065685, lon: -5.713303 }, 
  { name: "John O Groates", lat: 58.6373368, lon: -3.0688997  }
];

// Their corresponding pixel coordinates on your map image
// 👇 To fill these, check console logs after running the game
// Example placeholder values (replace with your own!):
const refPixels = [
  { x: 532.0, y: 1914.2 },  // London pixel (1250.5,1669.9) 532.0,1914.2
  { x: 889.4, y: 263.0 }   // Plymouth pixel (711.9,1860.8) 889.4,263.0
];

// ====== Compute Transform ======
function computeTransform(c1, p1, c2, p2) {
  const ax = (p2.x - p1.x) / (c2.lon - c1.lon);
  const bx = p1.x - ax * c1.lon;

  const ay = (p2.y - p1.y) / (c2.lat - c1.lat);
  const by = p1.y - ay * c1.lat;

  return { ax, bx, ay, by };
}
let transform = computeTransform(refCities[0], refPixels[0], refCities[1], refPixels[1]);

// ====== Conversion ======
function lonLatToXY(lon, lat) {
  return {
    x: transform.ax * lon + transform.bx,
    y: transform.ay * lat + transform.by
  };
}

function xyToLonLat(x, y) {
  return {
    lon: (x - transform.bx) / transform.ax,
    lat: (y - transform.by) / transform.ay
  };
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2)**2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// ====== Debug Helper: log where cities land ======
function logCityPixels() {
  targets.forEach(city => {
    const { x, y } = lonLatToXY(city.lon, city.lat);
    console.log(`${city.name}: x=${x.toFixed(1)}, y=${y.toFixed(1)}`);
  });
}
logCityPixels();

// ====== SVG + Layers ======
const svg = document.getElementById('map');
const townsLayer = document.getElementById('townsLayer');
const markersLayer = document.getElementById('markersLayer');
const pathsLayer = document.getElementById('pathsLayer');

// ====== Game State ======
let game = { round:0, picks:[], total:0, active:null, clicksThisRound:0 };

const elRound = document.getElementById('roundNum');
const elTarget = document.getElementById('targetName');
const elType = document.getElementById('targetType');
const elLastDistance = document.getElementById('lastDistance');
const elLastScore = document.getElementById('lastScore');
const elTotalScore = document.getElementById('totalScore');
const toast = document.getElementById('toast');

// ====== Zoom & Pan ======
let viewBox = {x:0,y:0,w:1000,h:1200};
function updateViewBox(){
  svg.setAttribute('viewBox',`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
}
updateViewBox();

// Zoom
svg.addEventListener('wheel', e=>{
  e.preventDefault();
  const scale = (e.deltaY>0)?1.1:0.9;
  viewBox.x += (e.offsetX/viewBox.clientWidth*viewBox.w) * (1-scale);
  viewBox.y += (e.offsetY/viewBox.clientHeight*viewBox.h) * (1-scale);
  viewBox.w *= scale;
  viewBox.h *= scale;
  updateViewBox();
});

// Pan
let isPanning=false,last={x:0,y:0};
svg.addEventListener('mousedown',e=>{isPanning=true;movedDuringPan = false;last={x:e.clientX,y:e.clientY}});
window.addEventListener('mouseup',()=>isPanning=false);
window.addEventListener('mousemove',e=>{
  if(!isPanning)return;
  const dx=(e.clientX-last.x)/svg.clientWidth*viewBox.w;
  const dy=(e.clientY-last.y)/svg.clientHeight*viewBox.h;
  viewBox.x-=dx; viewBox.y-=dy;
  last={x:e.clientX,y:e.clientY};
  if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) movedDuringPan = true;
  updateViewBox();
});

// ====== Game Flow ======
function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);}

function startGame(){
  const selectedTypes = getSelectedTypes();
  const filteredTargets = targets.filter(t => selectedTypes.includes(t.type));

  markersLayer.innerHTML = '';
  pathsLayer.innerHTML = '';
  townsLayer.innerHTML = '';
  
  game.round = 0;
  game.total = 0;
  
  // Shuffle and pick 10 from filtered
  game.picks = shuffle(filteredTargets).slice(0,10);

  elTotalScore.textContent = 0;
  elLastDistance.textContent = '—';
  elLastScore.textContent = '—';

  nextRound();
}
const checkboxes = document.querySelectorAll('#filter input[type=checkbox]');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    startGame();  // reshuffle targets whenever selection changes
  });
});

function nextRound(){
  game.clicksThisRound=0;
  if(game.round>=10){
    elTarget.textContent='Game Over';
    elType.textContent='';
    showToast(`🏁 Final score: ${game.total}/50,000`);
    return;
  }
  const target=game.picks[game.round];
  game.active=target;
  elRound.textContent=(game.round+1);
  elTarget.textContent=target.name;
  elType.textContent=`(${target.type})`;
  
}

function makeGuess(lat,lon){
  const target=game.active;
  const d=haversine(lat,lon,target.lat,target.lon);
  const score=Math.max(0,Math.round(5000*(1-(d/400))));

  const {x:gx,y:gy} = lonLatToXY(lon,lat);
  const {x:tx,y:ty} = lonLatToXY(target.lon,target.lat);

  const line=document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('x1',gx);line.setAttribute('y1',gy);
  line.setAttribute('x2',tx);line.setAttribute('y2',ty);
  line.setAttribute('stroke','#333');line.setAttribute('stroke-dasharray','10 6');
  pathsLayer.appendChild(line);

  const gDot=document.createElementNS('http://www.w3.org/2000/svg','circle');
  gDot.setAttribute('cx',gx);gDot.setAttribute('cy',gy);
  gDot.setAttribute('r',15);gDot.setAttribute('fill','#111');
  markersLayer.appendChild(gDot);

  const tDot=document.createElementNS('http://www.w3.org/2000/svg','circle');
  tDot.setAttribute('cx',tx);tDot.setAttribute('cy',ty);
  tDot.setAttribute('r',15);tDot.setAttribute('fill','#0a7');
  markersLayer.appendChild(tDot);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', tx + 10);
    label.setAttribute('y', ty - 10);
    label.setAttribute('font-size', '25');
    label.setAttribute('fill', '#5d4037');
    label.setAttribute('font-weight', 'bold'); // make text bold
    label.textContent = target.name;

    // Create a background rectangle
    const bbox = label.getBBox(); // get text dimensions
    const padding = 4; // optional padding around text
    const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    background.setAttribute('x', bbox.x - padding);
    background.setAttribute('y', bbox.y - padding);
    background.setAttribute('width', bbox.width + padding * 2);
    background.setAttribute('height', bbox.height + padding * 2);
    background.setAttribute('fill', 'white');

    // Append rectangle first, then text on top
    townsLayer.appendChild(background);
    townsLayer.appendChild(label);

  elLastDistance.textContent=`${d.toFixed(1)} km`;
  elLastScore.textContent=`${score} pts`;
  game.total+=score; elTotalScore.textContent=game.total;
  showToast(`${target.name}: ${d.toFixed(1)} km • +${score}`);

  game.clicksThisRound++;
  setTimeout(()=>{game.round++;nextRound();},1000);
}

// ====== Click Handling ======
svg.addEventListener('click',e=>{
  if(!game.active)return;
  if(game.round>=10)return;
  if(game.clicksThisRound>=1)return;
  if (movedDuringPan) return;

  const pt=svg.createSVGPoint();
  pt.x=e.clientX;pt.y=e.clientY;
  const ctm=svg.getScreenCTM().inverse();
  const loc=pt.matrixTransform(ctm);

  const {lon,lat}=xyToLonLat(loc.x,loc.y);
  console.log(`Clicked at pixel (${loc.x.toFixed(1)},${loc.y.toFixed(1)}) → approx lat=${lat.toFixed(3)}, lon=${lon.toFixed(3)}`);
  makeGuess(lat,lon);
});

// ====== UI ======
function showToast(msg){
  toast.textContent=msg; toast.style.display='block';
  clearTimeout(showToast._t);
  showToast._t=setTimeout(()=>toast.style.display='none',3000);
}
document.getElementById('restartBtn').addEventListener('click',startGame);

// Start overlay
document.getElementById('startBtn').addEventListener('click',()=>{
  document.getElementById('startOverlay').style.display='none';
  startGame();
});

// ====== Sample Targets ======
const peopleLayer = document.getElementById('people');
const numPeople = 20;
const people = [];

for (let i = 0; i < numPeople; i++) {
  const person = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  person.setAttribute('d', 'M -5 0 L 0 -5 L 5 0'); // small V shape like a flying bird
  person.setAttribute('stroke', '#222'); 
  person.setAttribute('stroke-width', 4);
  person.setAttribute('fill', 'none');
  
  const x = Math.random() * 1536;
  const y = Math.random() * 2304;
  
  person.setAttribute('transform', `translate(${x},${y}) rotate(${Math.random()*360})`);
  
  peopleLayer.appendChild(person);
  
  people.push({el: person, x, y, dx: (Math.random()-0.5)*2, dy: (Math.random()-0.5)*2});
}

// Animate people
function movePeople() {
  people.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    
    // wrap around edges
    if (p.x < 0) p.x = 1536;
    if (p.x > 1536) p.x = 0;
    if (p.y < 0) p.y = 2304;
    if (p.y > 2304) p.y = 0;
    
    const angle = Math.atan2(p.dy, p.dx) * 180 / Math.PI;
    p.el.setAttribute('transform', `translate(${p.x},${p.y}) rotate(${angle})`);
  });
  
  requestAnimationFrame(movePeople);
}
movePeople();
const fogLayers = [document.getElementById('fog1'), document.getElementById('fog2'), document.getElementById('fog3')];
let fogVisible = true;

document.getElementById('toggleFogBtn').addEventListener('click', () => {
  fogVisible = !fogVisible;
  cloudsVisible = !cloudsVisible;
  cloudsLayer.style.display = cloudsVisible ? 'block' : 'none';
  fogLayers.forEach(fog => fog.style.display = fogVisible ? 'block' : 'none');
});


let peopleVisible = true;
let cloudsVisible = true;
document.getElementById('toggleDoodlesBtn').addEventListener('click', () => {
  peopleVisible = !peopleVisible;
  peopleLayer.style.display = peopleVisible ? 'block' : 'none';
});



const cloudsLayer = document.getElementById('cloudsLayer');
const numClouds = 100; // more clouds
const clouds = [];

for (let i = 0; i < numClouds; i++) {
  const cloudGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const cloudWidth = 150 + Math.random() * 100;
  const cloudHeight = 60 + Math.random() * 40;
  const cloudY = Math.random() * 2304; // spread vertically
  const cloudX = Math.random() * 2000; // allow offscreen start

  const ellipses = 5 + Math.floor(Math.random() * 3); // 5–7 ellipses per cloud
  for (let j = 0; j < ellipses; j++) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    const rx = cloudWidth * (0.2 + Math.random() * 0.3);
    const ry = cloudHeight * (0.3 + Math.random() * 0.3);
    const cx = (Math.random() - 0.5) * cloudWidth;
    const cy = (Math.random() - 0.5) * cloudHeight;
    e.setAttribute('cx', cx);
    e.setAttribute('cy', cy);
    e.setAttribute('rx', rx);
    e.setAttribute('ry', ry);
    e.setAttribute('fill', 'white');
    e.setAttribute('opacity', 0.15 + Math.random() * 0.1); // very see-through
    cloudGroup.appendChild(e);
  }

  cloudGroup.setAttribute('transform', `translate(${cloudX},${cloudY})`);
  cloudsLayer.appendChild(cloudGroup);

  clouds.push({
    el: cloudGroup,
    x: cloudX,
    y: cloudY,
    dx: 0.2 + Math.random() * 0.5
  });
}

// Animate clouds
function moveClouds() {
  clouds.forEach(c => {
    c.x += c.dx;
    if (c.x > 1536) c.x = 0; // reset offscreen left
    c.el.setAttribute('transform', `translate(${c.x},${c.y})`);
  });
  requestAnimationFrame(moveClouds);
}
moveClouds();
