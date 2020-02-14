(function(window, undefined) {
  var dictionary = {
    "0a30b18f-f7c8-4152-9255-a1b021a75e27": "ILMUNUD AJAKIRJAD",
    "bd400626-3cb2-40a1-b25c-37235ef5b42e": "SAADA VIHJE",
    "cc2a8fa6-422b-4126-bee5-c4e05ac33c09": "KOOSTÖÖPARTNERID",
    "eea5d5c9-c915-47fe-aad6-d322b19c45a5": "üldplaan",
    "4ff8ced3-7b63-459f-8656-3546d2961461": "RÄNDNÄITUS",
    "6f646e6f-8bbc-4c9d-84cb-1fbb2baa311d": "TOETA VAIMUPUUD",
    "824716ea-4918-46e4-8d2b-d7167ece4d04": "FOTOD JA VIDEOD",
    "44f27c1f-ef89-4f6f-b49e-3641244aafdf": "RUBRIIGI LEHE NÄIDIS",
    "2f0d710a-009c-4feb-96e5-066dca16d763": "LIHTSUTATUD KEEEL",
    "2d78788e-7413-4087-bc63-6fc3780ce60a": "FOTOKONKURSSI ARHIIV",
    "ca73171e-9b23-4456-9852-5f843aba5da5": "AJAKIRJAD",
    "c176bd8e-2789-4bd7-a9f6-961e01ddf52d": "1 TASUB TEADA ARTIKKEL",
    "122d08c9-e214-426f-9884-55cb675aafde": "REKLAAMID",
    "e6ccdc57-a4c2-4ccd-955c-a5f060775156": "ARTIKLI NÄIDIS",
    "082d29f3-f35e-4de2-bb0a-48627066d08f": "TOIMETUS",
    "15ada915-806d-41d3-8059-47fd237cecfd": "VAIMUPUU FOTOKONKURSS",
    "12a88b94-c87f-4e72-9d54-8d7dbaeb6ea1": "FOTOKONKURSS",
    "50cfbfa3-a133-481b-b3bb-781fac5f954f": "PROJEKTID",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "VAIMUPUU ESILEHT",
    "a6e2720e-88ce-42f0-9bbd-2363bcf0bf91": "MEIE TOETAJAD",
    "e9b4a9c9-e735-4248-8fa4-d29841cdb0f1": "KOOLITUSED",
    "42783552-ba61-43b8-a824-cab98679bbd6": "FOTOKONKURSS 2020",
    "da9e8729-7d6b-4776-af32-d4138c7d194f": "TELLIMINE",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);