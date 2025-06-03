const currencies = [
  
    {
        "Code": "EUR",
        "Name": "Euro"
    },
    {
        "Code": "USD",
        "Name": "US Dollar"
    },
    {
        "Code": "JPY",
        "Name": "Japanese Yen"
    },
    {
        "Code": "BGN",
        "Name": "Bulgarian Lev"
    },
    {
        "Code": "CZK",
        "Name": "Czech Republic Koruna"
    },
    {
        "Code": "DKK",
        "Name": "Danish Krone"
    },
    {
        "Code": "GBP",
        "Name": "British Pound Sterling"
    },
    {
        "Code": "HUF",
        "Name": "Hungarian Forint"
    },
    {
        "Code": "PLN",
        "Name": "Polish Zloty"
    },
    {
        "Code": "RON",
        "Name": "Romanian Leu"
    },
    {
        "Code": "SEK",
        "Name": "Swedish Krona"
    },
    {
        "Code": "CHF",
        "Name": "Swiss Franc"
    },
    {
        "Code": "ISK",
        "Name": "Icelandic Króna"
    },
    {
        "Code": "NOK",
        "Name": "Norwegian Krone"
    },
    {
        "Code": "HRK",
        "Name": "Croatian Kuna"
    },
    {
        "Code": "RUB",
        "Name": "Russian Ruble"
    },
    {
        "Code": "TRY",
        "Name": "Turkish Lira"
    },
    {
        "Code": "AUD",
        "Name": "Australian Dollar"
    },
    {
        "Code": "BRL",
        "Name": "Brazilian Real"
    },
    {
        "Code": "CAD",
        "Name": "Canadian Dollar"
    },
    {
        "Code": "CNY",
        "Name": "Chinese Yuan"
    },
    {
        "Code": "HKD",
        "Name": "Hong Kong Dollar"
    },
    {
        "Code": "IDR",
        "Name": "Indonesian Rupiah"
    },
    {
        "Code": "ILS",
        "Name": "Israeli New Sheqel"
    },
    {
        "Code": "INR",
        "Name": "Indian Rupee"
    },
    {
        "Code": "KRW",
        "Name": "South Korean Won"
    },
    {
        "Code": "MXN",
        "Name": "Mexican Peso"
    },
    {
        "Code": "MYR",
        "Name": "Malaysian Ringgit"
    },
    {
        "Code": "NZD",
        "Name": "New Zealand Dollar"
    },
    {
        "Code": "PHP",
        "Name": "Philippine Peso"
    },
    {
        "Code": "SGD",
        "Name": "Singapore Dollar"
    },
    {
        "Code": "THB",
        "Name": "Thai Baht"
    },
    {
        "Code": "ZAR",
        "Name": "South African Rand"
    }
]
// const currencies = [
//   {
//     Code: "",
//     Name: "",
//     Country: ""
//   },
//   {
//     Code: "USD",
//     Name: "United States Dollar",
//     Country: "United States"
//   },
//   {
//     Code: "EUR",
//     Name: "Euro",
//     Country: "European Union"
//   },
//     {
//       Code: "AED",
//       Name: "UAE Dirham",
//       Country: "United Arab Emirates"
//     },
//     {
//       Code: "AFN",
//       Name: "Afghan Afghani",
//       Country: "Afghanistan"
//     },
//     {
//       Code: "ALL",
//       Name: "Albanian Lek",
//       Country: "Albania"
//     },
//     {
//       Code: "AMD",
//       Name: "Armenian Dram",
//       Country: "Armenia"
//     },
//     {
//       Code: "ANG",
//       Name: "Netherlands Antillian Guilder",
//       Country: "Netherlands Antilles"
//     },
//     {
//       Code: "AOA",
//       Name: "Angolan Kwanza",
//       Country: "Angola"
//     },
//     {
//       Code: "ARS",
//       Name: "Argentine Peso",
//       Country: "Argentina"
//     },
//     {
//       Code: "AUD",
//       Name: "Australian Dollar",
//       Country: "Australia"
//     },
//     {
//       Code: "AWG",
//       Name: "Aruban Florin",
//       Country: "Aruba"
//     },
//     {
//       Code: "AZN",
//       Name: "Azerbaijani Manat",
//       Country: "Azerbaijan"
//     },
//     {
//       Code: "BAM",
//       Name: "Bosnia and Herzegovina Mark",
//       Country: "Bosnia and Herzegovina"
//     },
//     {
//       Code: "BBD",
//       Name: "Barbados Dollar",
//       Country: "Barbados"
//     },
//     {
//       Code: "BDT",
//       Name: "Bangladeshi Taka",
//       Country: "Bangladesh"
//     },
//     {
//       Code: "BGN",
//       Name: "Bulgarian Lev",
//       Country: "Bulgaria"
//     },
//     {
//       Code: "BHD",
//       Name: "Bahraini Dinar",
//       Country: "Bahrain"
//     },
//     {
//       Code: "BIF",
//       Name: "Burundian Franc",
//       Country: "Burundi"
//     },
//     {
//       Code: "BMD",
//       Name: "Bermudian Dollar",
//       Country: "Bermuda"
//     },
//     {
//       Code: "BND",
//       Name: "Brunei Dollar",
//       Country: "Brunei"
//     },
//     {
//       Code: "BOB",
//       Name: "Bolivian Boliviano",
//       Country: "Bolivia"
//     },
//     {
//       Code: "BRL",
//       Name: "Brazilian Real",
//       Country: "Brazil"
//     },
//     {
//       Code: "BSD",
//       Name: "Bahamian Dollar",
//       Country: "Bahamas"
//     },
//     {
//       Code: "BTN",
//       Name: "Bhutanese Ngultrum",
//       Country: "Bhutan"
//     },
//     {
//       Code: "BWP",
//       Name: "Botswana Pula",
//       Country: "Botswana"
//     },
//     {
//       Code: "BYN",
//       Name: "Belarusian Ruble",
//       Country: "Belarus"
//     },
//     {
//       Code: "BZD",
//       Name: "Belize Dollar",
//       Country: "Belize"
//     },
//     {
//       Code: "CAD",
//       Name: "Canadian Dollar",
//       Country: "Canada"
//     },
//     {
//       Code: "CDF",
//       Name: "Congolese Franc",
//       Country: "Democratic Republic of the Congo"
//     },
//     {
//       Code: "CHF",
//       Name: "Swiss Franc",
//       Country: "Switzerland"
//     },
//     {
//       Code: "CLP",
//       Name: "Chilean Peso",
//       Country: "Chile"
//     },
//     {
//       Code: "CNY",
//       Name: "Chinese Renminbi",
//       Country: "China"
//     },
//     {
//       Code: "COP",
//       Name: "Colombian Peso",
//       Country: "Colombia"
//     },
//     {
//       Code: "CRC",
//       Name: "Costa Rican Colon",
//       Country: "Costa Rica"
//     },
//     {
//       Code: "CUP",
//       Name: "Cuban Peso",
//       Country: "Cuba"
//     },
//     {
//       Code: "CVE",
//       Name: "Cape Verdean Escudo",
//       Country: "Cape Verde"
//     },
//     {
//       Code: "CZK",
//       Name: "Czech Koruna",
//       Country: "Czech Republic"
//     },
//     {
//       Code: "DJF",
//       Name: "Djiboutian Franc",
//       Country: "Djibouti"
//     },
//     {
//       Code: "DKK",
//       Name: "Danish Krone",
//       Country: "Denmark"
//     },
//     {
//       Code: "DOP",
//       Name: "Dominican Peso",
//       Country: "Dominican Republic"
//     },
//     {
//       Code: "DZD",
//       Name: "Algerian Dinar",
//       Country: "Algeria"
//     },
//     {
//       Code: "EGP",
//       Name: "Egyptian Pound",
//       Country: "Egypt"
//     },
//     {
//       Code: "ERN",
//       Name: "Eritrean Nakfa",
//       Country: "Eritrea"
//     },
//     {
//       Code: "ETB",
//       Name: "Ethiopian Birr",
//       Country: "Ethiopia"
//     },
//     {
//       Code: "FJD",
//       Name: "Fiji Dollar",
//       Country: "Fiji"
//     },
//     {
//       Code: "FKP",
//       Name: "Falkland Islands Pound",
//       Country: "Falkland Islands"
//     },
//     {
//       Code: "FOK",
//       Name: "Faroese Króna",
//       Country: "Faroe Islands"
//     },
//     {
//       Code: "GBP",
//       Name: "Pound Sterling",
//       Country: "United Kingdom"
//     },
//     {
//       Code: "GEL",
//       Name: "Georgian Lari",
//       Country: "Georgia"
//     },
//     {
//       Code: "GGP",
//       Name: "Guernsey Pound",
//       Country: "Guernsey"
//     },
//     {
//       Code: "GHS",
//       Name: "Ghanaian Cedi",
//       Country: "Ghana"
//     },
//     {
//       Code: "GIP",
//       Name: "Gibraltar Pound",
//       Country: "Gibraltar"
//     },
//     {
//       Code: "GMD",
//       Name: "Gambian Dalasi",
//       Country: "The Gambia"
//     },
//     {
//       Code: "GNF",
//       Name: "Guinean Franc",
//       Country: "Guinea"
//     },
//     {
//       Code: "GTQ",
//       Name: "Guatemalan Quetzal",
//       Country: "Guatemala"
//     },
//     {
//       Code: "GYD",
//       Name: "Guyanese Dollar",
//       Country: "Guyana"
//     },
//     {
//       Code: "HKD",
//       Name: "Hong Kong Dollar",
//       Country: "Hong Kong"
//     },
//     {
//       Code: "HNL",
//       Name: "Honduran Lempira",
//       Country: "Honduras"
//     },
//     {
//       Code: "HRK",
//       Name: "Croatian Kuna",
//       Country: "Croatia"
//     },
//     {
//       Code: "HTG",
//       Name: "Haitian Gourde",
//       Country: "Haiti"
//     },
//     {
//       Code: "HUF",
//       Name: "Hungarian Forint",
//       Country: "Hungary"
//     },
//     {
//       Code: "IDR",
//       Name: "Indonesian Rupiah",
//       Country: "Indonesia"
//     },
//     {
//       Code: "ILS",
//       Name: "Israeli New Shekel",
//       Country: "Israel"
//     },
//     {
//       Code: "IMP",
//       Name: "Manx Pound",
//       Country: "Isle of Man"
//     },
//     {
//       Code: "INR",
//       Name: "Indian Rupee",
//       Country: "India"
//     },
//     {
//       Code: "IQD",
//       Name: "Iraqi Dinar",
//       Country: "Iraq"
//     },
//     {
//       Code: "IRR",
//       Name: "Iranian Rial",
//       Country: "Iran"
//     },
//     {
//       Code: "ISK",
//       Name: "Icelandic Króna",
//       Country: "Iceland"
//     },
//     {
//       Code: "JEP",
//       Name: "Jersey Pound",
//       Country: "Jersey"
//     },
//     {
//       Code: "JMD",
//       Name: "Jamaican Dollar",
//       Country: "Jamaica"
//     },
//     {
//       Code: "JOD",
//       Name: "Jordanian Dinar",
//       Country: "Jordan"
//     },
//     {
//       Code: "JPY",
//       Name: "Japanese Yen",
//       Country: "Japan"
//     },
//     {
//       Code: "KES",
//       Name: "Kenyan Shilling",
//       Country: "Kenya"
//     },
//     {
//       Code: "KGS",
//       Name: "Kyrgyzstani Som",
//       Country: "Kyrgyzstan"
//     },
//     {
//       Code: "KHR",
//       Name: "Cambodian Riel",
//       Country: "Cambodia"
//     },
//     {
//       Code: "KID",
//       Name: "Kiribati Dollar",
//       Country: "Kiribati"
//     },
//     {
//       Code: "KMF",
//       Name: "Comorian Franc",
//       Country: "Comoros"
//     },
//     {
//       Code: "KRW",
//       Name: "South Korean Won",
//       Country: "South Korea"
//     },
//     {
//       Code: "KWD",
//       Name: "Kuwaiti Dinar",
//       Country: "Kuwait"
//     },
//     {
//       Code: "KYD",
//       Name: "Cayman Islands Dollar",
//       Country: "Cayman Islands"
//     },
//     {
//       Code: "KZT",
//       Name: "Kazakhstani Tenge",
//       Country: "Kazakhstan"
//     },
//     {
//       Code: "LAK",
//       Name: "Lao Kip",
//       Country: "Laos"
//     },
//     {
//       Code: "LBP",
//       Name: "Lebanese Pound",
//       Country: "Lebanon"
//     },
//     {
//       Code: "LKR",
//       Name: "Sri Lanka Rupee",
//       Country: "Sri Lanka"
//     },
//     {
//       Code: "LRD",
//       Name: "Liberian Dollar",
//       Country: "Liberia"
//     },
//     {
//       Code: "LSL",
//       Name: "Lesotho Loti",
//       Country: "Lesotho"
//     },
//     {
//       Code: "LYD",
//       Name: "Libyan Dinar",
//       Country: "Libya"
//     },
//     {
//       Code: "MAD",
//       Name: "Moroccan Dirham",
//       Country: "Morocco"
//     },
//     {
//       Code: "MDL",
//       Name: "Moldovan Leu",
//       Country: "Moldova"
//     },
//     {
//       Code: "MGA",
//       Name: "Malagasy Ariary",
//       Country: "Madagascar"
//     },
//     {
//       Code: "MKD",
//       Name: "Macedonian Denar",
//       Country: "North Macedonia"
//     },
//     {
//       Code: "MMK",
//       Name: "Burmese Kyat",
//       Country: "Myanmar"
//     },
//     {
//       Code: "MNT",
//       Name: "Mongolian Tögrög",
//       Country: "Mongolia"
//     },
//     {
//       Code: "MOP",
//       Name: "Macanese Pataca",
//       Country: "Macau"
//     },
//     {
//       Code: "MRU",
//       Name: "Mauritanian Ouguiya",
//       Country: "Mauritania"
//     },
//     {
//       Code: "MUR",
//       Name: "Mauritian Rupee",
//       Country: "Mauritius"
//     },
//     {
//       Code: "MVR",
//       Name: "Maldivian Rufiyaa",
//       Country: "Maldives"
//     },
//     {
//       Code: "MWK",
//       Name: "Malawian Kwacha",
//       Country: "Malawi"
//     },
//     {
//       Code: "MXN",
//       Name: "Mexican Peso",
//       Country: "Mexico"
//     },
//     {
//       Code: "MYR",
//       Name: "Malaysian Ringgit",
//       Country: "Malaysia"
//     },
//     {
//       Code: "MZN",
//       Name: "Mozambican Metical",
//       Country: "Mozambique"
//     },
//     {
//       Code: "NAD",
//       Name: "Namibian Dollar",
//       Country: "Namibia"
//     },
//     {
//       Code: "NGN",
//       Name: "Nigerian Naira",
//       Country: "Nigeria"
//     },
//     {
//       Code: "NIO",
//       Name: "Nicaraguan Córdoba",
//       Country: "Nicaragua"
//     },
//     {
//       Code: "NOK",
//       Name: "Norwegian Krone",
//       Country: "Norway"
//     },
//     {
//       Code: "NPR",
//       Name: "Nepalese Rupee",
//       Country: "Nepal"
//     },
//     {
//       Code: "NZD",
//       Name: "New Zealand Dollar",
//       Country: "New Zealand"
//     },
//     {
//       Code: "OMR",
//       Name: "Omani Rial",
//       Country: "Oman"
//     },
//     {
//       Code: "PAB",
//       Name: "Panamanian Balboa",
//       Country: "Panama"
//     },
//     {
//       Code: "PEN",
//       Name: "Peruvian Sol",
//       Country: "Peru"
//     },
//     {
//       Code: "PGK",
//       Name: "Papua New Guinean Kina",
//       Country: "Papua New Guinea"
//     },
//     {
//       Code: "PHP",
//       Name: "Philippine Peso",
//       Country: "Philippines"
//     },
//     {
//       Code: "PKR",
//       Name: "Pakistani Rupee",
//       Country: "Pakistan"
//     },
//     {
//       Code: "PLN",
//       Name: "Polish Zloty",
//       Country: "Poland"
//     },
//     {
//       Code: "PYG",
//       Name: "Paraguayan Guaraní",
//       Country: "Paraguay"
//     },
//     {
//       Code: "QAR",
//       Name: "Qatari Riyal",
//       Country: "Qatar"
//     },
//     {
//       Code: "RON",
//       Name: "Romanian Leu",
//       Country: "Romania"
//     },
//     {
//       Code: "RSD",
//       Name: "Serbian Dinar",
//       Country: "Serbia"
//     },
//     {
//       Code: "RUB",
//       Name: "Russian Ruble",
//       Country: "Russia"
//     },
//     {
//       Code: "RWF",
//       Name: "Rwandan Franc",
//       Country: "Rwanda"
//     },
//     {
//       Code: "SAR",
//       Name: "Saudi Riyal",
//       Country: "Saudi Arabia"
//     },
//     {
//       Code: "SBD",
//       Name: "Solomon Islands Dollar",
//       Country: "Solomon Islands"
//     },
//     {
//       Code: "SCR",
//       Name: "Seychellois Rupee",
//       Country: "Seychelles"
//     },
//     {
//       Code: "SDG",
//       Name: "Sudanese Pound",
//       Country: "Sudan"
//     },
//     {
//       Code: "SEK",
//       Name: "Swedish Krona",
//       Country: "Sweden"
//     },
//     {
//       Code: "SGD",
//       Name: "Singapore Dollar",
//       Country: "Singapore"
//     },
//     {
//       Code: "SHP",
//       Name: "Saint Helena Pound",
//       Country: "Saint Helena"
//     },
//     {
//       Code: "SLE",
//       Name: "Sierra Leonean Leone",
//       Country: "Sierra Leone"
//     },
//     {
//       Code: "SOS",
//       Name: "Somali Shilling",
//       Country: "Somalia"
//     },
//     {
//       Code: "SRD",
//       Name: "Surinamese Dollar",
//       Country: "Suriname"
//     },
//     {
//       Code: "SSP",
//       Name: "South Sudanese Pound",
//       Country: "South Sudan"
//     },
//     {
//       Code: "STN",
//       Name: "São Tomé and Príncipe Dobra",
//       Country: "São Tomé and Príncipe"
//     },
//     {
//       Code: "SYP",
//       Name: "Syrian Pound",
//       Country: "Syria"
//     },
//     {
//       Code: "SZL",
//       Name: "Eswatini Lilangeni",
//       Country: "Eswatini"
//     },
//     {
//       Code: "THB",
//       Name: "Thai Baht",
//       Country: "Thailand"
//     },
//     {
//       Code: "TJS",
//       Name: "Tajikistani Somoni",
//       Country: "Tajikistan"
//     },
//     {
//       Code: "TMT",
//       Name: "Turkmenistan Manat",
//       Country: "Turkmenistan"
//     },
//     {
//       Code: "TND",
//       Name: "Tunisian Dinar",
//       Country: "Tunisia"
//     },
//     {
//       Code: "TOP",
//       Name: "Tongan Pa?anga",
//       Country: "Tonga"
//     },
//     {
//       Code: "TRY",
//       Name: "Turkish Lira",
//       Country: "Turkey"
//     },
//     {
//       Code: "TTD",
//       Name: "Trinidad and Tobago Dollar",
//       Country: "Trinidad and Tobago"
//     },
//     {
//       Code: "TVD",
//       Name: "Tuvaluan Dollar",
//       Country: "Tuvalu"
//     },
//     {
//       Code: "TWD",
//       Name: "New Taiwan Dollar",
//       Country: "Taiwan"
//     },
//     {
//       Code: "TZS",
//       Name: "Tanzanian Shilling",
//       Country: "Tanzania"
//     },
//     {
//       Code: "UAH",
//       Name: "Ukrainian Hryvnia",
//       Country: "Ukraine"
//     },
//     {
//       Code: "UGX",
//       Name: "Ugandan Shilling",
//       Country: "Uganda"
//     },
//     {
//       Code: "UYU",
//       Name: "Uruguayan Peso",
//       Country: "Uruguay"
//     },
//     {
//       Code: "UZS",
//       Name: "Uzbekistani So'm",
//       Country: "Uzbekistan"
//     },
//     {
//       Code: "VES",
//       Name: "Venezuelan Bolívar Soberano",
//       Country: "Venezuela"
//     },
//     {
//       Code: "VND",
//       Name: "Vietnamese Ð?ng",
//       Country: "Vietnam"
//     },
//     {
//       Code: "VUV",
//       Name: "Vanuatu Vatu",
//       Country: "Vanuatu"
//     },
//     {
//       Code: "WST",
//       Name: "Samoan Tala",
//       Country: "Samoa"
//     },
//     {
//       Code: "XAF",
//       Name: "Central African CFA Franc",
//       Country: "CEMAC"
//     },
//     {
//       Code: "XCD",
//       Name: "East Caribbean Dollar",
//       Country: "Organisation of Eastern Caribbean States"
//     },
//     {
//       Code: "XDR",
//       Name: "Special Drawing Rights",
//       Country: "International Monetary Fund"
//     },
//     {
//       Code: "XOF",
//       Name: "West African CFA franc",
//       Country: "CFA"
//     },
//     {
//       Code: "XPF",
//       Name: "CFP Franc",
//       Country: "Collectivités d'Outre-Mer"
//     },
//     {
//       Code: "YER",
//       Name: "Yemeni Rial",
//       Country: "Yemen"
//     },
//     {
//       Code: "ZAR",
//       Name: "South African Rand",
//       Country: "South Africa"
//     },
//     {
//       Code: "ZMW",
//       Name: "Zambian Kwacha",
//       Country: "Zambia"
//     },
//     {
//       Code: "ZWL",
//       Name: "Zimbabwean Dollar",
//       Country: "Zimbabwe"
//     }
//   ];

  export default currencies;