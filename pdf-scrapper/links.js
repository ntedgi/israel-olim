const links =  [
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5d61",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4c56",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809c7400",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5d63",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4c57",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4c58",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4c5b",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4ca2",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4ca3",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4ca4",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4ca6",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809d4ca5",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aff16",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809bed33",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809bed36",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd84",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd85",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd86",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd88",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aff5f",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd89",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd8a",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccd8b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aff61",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aff63",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccdd2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aff65",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809ccdd6",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdb9",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbd71",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdbb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806affaf",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f45",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdbd",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdbe",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f4a",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdbf",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f47",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd09c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806df287",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f4c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e3c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e8a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e8c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e92",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806df285",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e3a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e3e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e40",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e42",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4e8e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4eda",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4edc",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd094",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd096",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd098",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd09a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd0e4",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f95",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbdc0",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f97",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dbe09",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f9a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc895",
  "https://www.archives.gov.il/archives/Archive/0b0717068001a9a2/File/0b071706806bc897",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc8e1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc899",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc2b6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc8e2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc8e3",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc2b7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc8e8",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc8ea",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c304e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c3050",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c3099",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc2b8",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc2ff",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c309b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c309c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b07170680748225",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e5999",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e599a",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e599b",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc303",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc304",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e5997",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c309f",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809dc300",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e5996",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e599c",
  "https://www.archives.gov.il/archives/#/Archive/0b071706800386c1/File/0b071706809e5998",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c30e7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c30eb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c30ed",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce56b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce56c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce56f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce570",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce573",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce5bb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce5bd",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce5c1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce5c3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce5c4",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce60d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d4a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d4e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d4c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d50",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d53",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d9e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4d9f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4da1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4da3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4deb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4ded",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcfa6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcfa8",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcfab",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcfac",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcff6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806df2b6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806df2b8",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcff9",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dcffb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd043",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd045",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd047",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc5e6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd04b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dd049",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc5e7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc631",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc634",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc636",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc638",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc639",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc681",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc684",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc686",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc6d2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806cc688",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5cec",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5cee",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5cf0",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5cf2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d3a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d3c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d3e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d40",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d8a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d8b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d8e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d90",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d92",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d5d93",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d8089",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9343",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9345",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9348",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9391",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9393",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9394",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9396",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d9399",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d93e1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d93e2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d93e5",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d93e7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d93e9",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dddda",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde23",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde25",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde26",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde29",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde2b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde73",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde75",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde76",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806dde78",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ddec3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ddec5",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ddec7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069b9d1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba19",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba1b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba1d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba1f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba69",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba6a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba6d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba6f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069babc",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bfc",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba70",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bae",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bab",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069ba72",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069babb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bf6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bf8",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4ba9",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bfa",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c97",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c99",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa80b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa80d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa80f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa857",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa859",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa85b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa85f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8a7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8a9",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8ab",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8ad",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8af",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806aa8f7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fd61",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fd63",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fd67",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdaf",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdb1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdb3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdb5",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdb7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fdff",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fe01",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fe03",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b0717068069fe06",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5dab",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5dad",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5daf",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5db1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5db3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5dfb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5dfd",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5dff",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5e01",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5e4b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5e4e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b5e50",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806affb3",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806affb5",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806affb7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806affff",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0001",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0002",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0007",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b004f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0050",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0053",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b0055",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b1687",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b1688",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b16d2",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f9b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f9c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c7f9e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b8430",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b8432",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b8434",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b847c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b847d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806b8480",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bacb6",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bacb7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bad00",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bad02",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bad06",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc932",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc934",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc935",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc937",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc93a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc982",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc984",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc986",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc98a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bfec8",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bfeca",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bfecb",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bc894",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806bfecd",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c30ee",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c30f0",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c3139",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c313a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c313f",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c3140",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c3189",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c318b",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c318d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c318e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c31d7",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c31d9",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806c313e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce60e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce611",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce613",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce614",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce65d",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce65e",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce661",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce663",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce6ab",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806ce6ad",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4def",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806d4df1",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4bfe",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c46",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c48",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c4a",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c4c",
  "https://www.archives.gov.il/archives/#/Archive/0b0717068001a9a2/File/0b071706806a4c95",
];

module.exports = {
    links
}