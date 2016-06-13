Meteor.startup(function() {
  if (Cases.find().count() === 0) {
    let newCases = [
      {"age":71,"drugs":["Prednisone", "Abiraterone"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-003"},
      {"age":60,"drugs":["Docetaxel","Carboplatin", "Docetaxel"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["FGER1", "TP53"],"Status":"OFF STUDY","caseLabel":"DTB-005"},
      {"age":61,"drugs":["Prednisone", "Mitoxantrone", "Cabazitaxel"],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-007"},
      {"age":75,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":9,"Histology":["Small Cell"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-008"},
      {"age":63,"drugs":["Docetaxel"],"gender":"male","gleasonScore":8,"Histology":["Other"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-009"},
      {"age":71,"drugs":["Carboplatin", "Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"OFF STUDY","caseLabel":"DTB-004"},
      {"age":68,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":["EGFR", "TP53"],"Status":"ON TREATMENT","caseLabel":"DTB-011"},
      {"age":61,"drugs":["Abiraterone", "Prednisone","Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor","Other"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-010"},
      {"age":65,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-013"},
      {"age":69,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor","Other"],"Mutations":["None"],"Status":"ON FOLLOW UP","caseLabel":"DTB-016"},
      {"age":70,"drugs":[],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["PIK3R1"],"Status":"EXPIRED","caseLabel":"DTB-020"},
      {"age":66,"drugs":["Abiraterone", "Prednisone","Alpharadin", "Docetaxel"],"gender":"male","gleasonScore":8,"Histology":["Other","Adenocarcinoma"],"Mutations":["TP53","None"],"Status":"OFF TREATMENT","caseLabel":"DTB-019"},
      {"age":55,"drugs":["Abiraterone", "Prednisone","Selinexor"],"gender":"male","gleasonScore":9,"Histology":["Other","No Definite Tumor"],"Mutations":["TP53"],"Status":"ON FOLLOW UP","caseLabel":"DTB-018"},
      {"age":74,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-015"},
      {"age":57,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-021"},
      {"age":65,"drugs":["Prednisone", "Abiraterone"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma","Adenocarcinoma"],"Mutations":["None","None"],"Status":"ON FOLLOW UP","caseLabel":"DTB-014"},
      {"age":54,"drugs":["Xofigo"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-023"},
      {"age":74,"gender":"male","gleasonScore":7,"Status":"OFF STUDY","caseLabel":"DTB-025"},
      {"age":77,"drugs":["Docetaxel","Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-024"},
      {"age":61,"drugs":["Cabazitaxel", "Mitoxantrone", "Dexamethasone", "Prednisone"],"gender":"male","gleasonScore":8,"Histology":["No Definite Tumor","No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-026"},
      {"age":72,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":10,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-027"},
      {"age":61,"drugs":["Radium-223 chloride"],"gender":"male","gleasonScore":8,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-028"},
      {"age":88,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":6,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-035"},
      {"age":69,"drugs":["Prednisone", "Abiraterone","Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-022"},
      {"age":49,"drugs":["Docetaxel", "MLN8237"],"gender":"male","gleasonScore":9,"Histology":["Small Cell"],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-031"},
      {"age":77,"drugs":["Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-032"},
      {"age":69,"drugs":["Carboplatin", "Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Other"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-034"},
      {"age":75,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":7,"Histology":["Other"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-030"},
      {"age":74,"drugs":[],"gender":"male","Histology":["Small Cell"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-036"},
      {"age":55,"drugs":["Docetaxel"],"gender":"male","gleasonScore":9,"Histology":["Small Cell"],"Mutations":["RBI"],"Status":"EXPIRED","caseLabel":"DTB-043"},
      {"age":64,"drugs":["Xofigo"],"gender":"male","gleasonScore":6,"Histology":["Small Cell"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-037"},
      {"age":77,"drugs":["Prednisone", "Abiraterone"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON FOLLOW UP","caseLabel":"DTB-038"},
      {"age":71,"drugs":["Docetaxel", "Phenelzine"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["TSC2"],"Status":"EXPIRED","caseLabel":"DTB-039"},
      {"age":57,"drugs":["Cisplatin/Etoposide"],"gender":"male","gleasonScore":9,"Histology":["Small Cell"],"Mutations":["TP53", "PTEN"],"Status":"EXPIRED","caseLabel":"DTB-040"},
      {"age":64,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Status":"EXPIRED","caseLabel":"DTB-042"},
      {"age":71,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":10,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-041"},
      {"age":84,"drugs":["Decadron", "Cytoxan","Radium-223 chloride","Mitoxantrone"],"gender":"male","gleasonScore":8,"Histology":["No Definite Tumor","No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-033"},
      {"age":72,"drugs":["CC-115"],"gender":"male","gleasonScore":7,"Histology":["Other"],"Mutations":["PTEN"],"Status":"EXPIRED","caseLabel":"DTB-044"},
      {"age":66,"drugs":["Docetaxel","Abiraterone", "Prednisone"],"gender":"male","Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-045"},
      {"age":66,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["PIK3CA", "PTEN"],"Status":"ON TREATMENT","caseLabel":"DTB-046"},
      {"age":73,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-047"},
      {"age":69,"drugs":["Docetaxel", "Carboplatin"],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-049"},
      {"age":67,"drugs":[],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-050"},
      {"age":67,"drugs":["Dexamethasone", "Cabazitaxel", "Mitoxantrone"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-052"},
      {"age":75,"drugs":["Enzalutamide", "Xofigo"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-053"},
      {"age":75,"drugs":["Prednisone", "Abiraterone","Ketoconazole"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor","Adenocarcinoma"],"Mutations":["PTEN", "TP53"],"Status":"EXPIRED","caseLabel":"DTB-055"},
      {"age":72,"drugs":["Cabazitaxel", "Custirsen","Enzalutamide","Cyclophosphamide", "Dexamethasone","Abiraterone", "Prednisone","Abiraterone", "Melphalan/Prednisone"],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-056"},
      {"age":68,"drugs":["Mitoxantrone"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-058"},
      {"age":65,"drugs":["Prednisone", "Docetaxel","Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-057"},
      {"age":64,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-059"},
      {"age":82,"drugs":["Enzalutamide"],"gender":"male","Histology":["Adenocarcinoma","Adenocarcinoma"],"Mutations":["None","None"],"Status":"EXPIRED","caseLabel":"DTB-060"},
      {"age":68,"drugs":["Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":["TSC1", "NOTCH1", "TP53"],"Status":"EXPIRED","caseLabel":"DTB-061"},
      {"age":71,"drugs":["Prednisone", "Docetaxel","Radium-223 chloride","Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-062"},
      {"age":62,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["TSC2"],"Status":"ON FOLLOW UP","caseLabel":"DTB-064"},
      {"age":65,"drugs":["Enzalutamide","Abiraterone", "Prednisone","MEK-162","Provenge"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma","Other"],"Mutations":["HRAS", "TP53", "AKT1","TP53", "AKT1", "HRAS"],"Status":"ON FOLLOW UP","caseLabel":"DTB-063"},
      {"age":69,"drugs":["Mitoxantrone"],"gender":"male","Histology":["Small Cell"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-065"},
      {"age":73,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":10,"Histology":["Adenocarcinoma","Other"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-067"},
      {"age":70,"drugs":["Itraconazole","Carboplatin", "Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"OFF STUDY","caseLabel":"DTB-068"},
      {"age":71,"drugs":[],"gender":"male","gleasonScore":6,"Histology":["No Definite Tumor"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-075"},
      {"age":76,"drugs":["Radium-223 chloride"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-070"},
      {"age":70,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-077"},
      {"age":66,"gender":"male","gleasonScore":9,"Histology":[],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-072"},
      {"age":67,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":10,"Histology":["Other","Other"],"Mutations":["TP53","TP53"],"Status":"EXPIRED","caseLabel":"DTB-073"},
      {"age":76,"drugs":[],"gender":"male","gleasonScore":8,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-074"},
      {"age":73,"drugs":["Cabazitaxel"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":["TP53", "PIK3CA"],"Status":"EXPIRED","caseLabel":"DTB-069"},
      {"age":79,"drugs":["Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-076"},
      {"age":66,"drugs":["Abiraterone"],"gender":"male","gleasonScore":9,"Histology":["Small Cell"],"Mutations":["GNAS", "NFI", "TP53"],"Status":"EXPIRED","caseLabel":"DTB-071"},
      {"age":89,"drugs":["Xofigo"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-078"},
      {"age":78,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-079"},
      {"age":59,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Small Cell","Adenocarcinoma"],"Mutations":["PTEN","PTEN"],"Status":"ON FOLLOW UP","caseLabel":"DTB-080"},
      {"age":53,"drugs":["Etoposide", "Cisplatin"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-081"},
      {"age":62,"drugs":["Provenge","Ipilimumab"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"OFF STUDY","caseLabel":"DTB-082"},
      {"age":75,"drugs":["Cabazitaxel", "Prednisone","Cytoxan"],"gender":"male","gleasonScore":7,"Histology":["Small Cell"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-083"},
      {"age":79,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["HRAS", "CDKN2A", "TP53"],"Status":"EXPIRED","caseLabel":"DTB-091"},
      {"age":74,"drugs":["Docetaxel"],"gender":"male","gleasonScore":6,"Histology":["Other"],"Mutations":["MET", "TP53"],"Status":"EXPIRED","caseLabel":"DTB-085"},
      {"age":72,"drugs":["Enzalutamide"],"gender":"male","Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-086"},
      {"age":66,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-087"},
      {"age":73,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"EXPIRED","caseLabel":"DTB-088"},
      {"age":79,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma","Adenocarcinoma"],"Mutations":["None","TP53"],"Status":"EXPIRED","caseLabel":"DTB-089"},
      {"age":45,"drugs":["Xofigo","Enzalutamide"],"gender":"male","gleasonScore":10,"Histology":["Adenocarcinoma","Other"],"Mutations":["None","PTEN", "TP53"],"Status":"ON FOLLOW UP","caseLabel":"DTB-090"},
      {"age":59,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-084"},
      {"age":67,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"ON FOLLOW UP","caseLabel":"DTB-092"},
      {"age":73,"drugs":[],"gender":"male","Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-093"},
      {"age":67,"drugs":["Provenge"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma","Adenocarcinoma"],"Mutations":["RBI","RBI"],"Status":"EXPIRED","caseLabel":"DTB-095"},
      {"age":65,"drugs":["Enzalutamide","Prednisone", "Abiraterone"],"gender":"male","Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-094"},
      {"age":70,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma","Adenocarcinoma"],"Mutations":["None"],"Status":"ON FOLLOW UP","caseLabel":"DTB-096"},
      {"age":73,"drugs":["BMN-673"],"gender":"male","gleasonScore":6,"Histology":["Adenocarcinoma","Other"],"Mutations":["NFI","NFI"],"Status":"EXPIRED","caseLabel":"DTB-097"},
      {"age":58,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-098"},
      {"age":66,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-099"},
      {"age":68,"drugs":["Mitoxantrone"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["PTEN", "TP53"],"Status":"ON FOLLOW UP","caseLabel":"DTB-100"},
      {"age":74,"drugs":["Xofigo","Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-101"},
      {"age":85,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Other"],"Mutations":["TP53"],"Status":"ON TREATMENT","caseLabel":"DTB-102"},
      {"age":67,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Other","Other"],"Mutations":["RBI", "FGER3", "NOTCH1","NOTCH1", "FGER3", "RBI"],"Status":"ON FOLLOW UP","caseLabel":"DTB-103"},
      {"age":82,"drugs":["Abiraterone", "Prednisone"],"gender":"male","gleasonScore":6,"Histology":["Other"],"Mutations":["ERBB2", "DDR2", "PTEN", "TP53"],"Status":"ON TREATMENT","caseLabel":"DTB-104"},
      {"age":63,"drugs":["Enzalutamide","Xofigo"],"gender":"male","Histology":["Other"],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-106"},
      {"age":63,"drugs":["Xofigo","Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Other"],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-105"},
      {"age":66,"drugs":[],"gender":"male","gleasonScore":9,"Histology":["Other"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-107"},
      {"age":63,"drugs":["Docetaxel"],"gender":"male","gleasonScore":6,"Histology":["Other"],"Mutations":["CDKN2A"],"Status":"EXPIRED","caseLabel":"DTB-108"},
      {"age":61,"drugs":["Sipuleucel-T"],"gender":"male","gleasonScore":9,"Histology":["Other"],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-109"},
      {"age":66,"drugs":["Docetaxel", "Prednisone"],"gender":"male","gleasonScore":8,"Status":"ON TREATMENT","caseLabel":"DTB-110"},
      {"age":69,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma","Other"],"Mutations":["TP53", "CDKN2A", "KDR","TP53", "KDR", "CDKN2A"],"Status":"ON FOLLOW UP","caseLabel":"DTB-111"},
      {"age":70,"drugs":["Prednisone", "Abiraterone"],"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-113"},
      {"age":76,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Adenocarcinoma"],"Mutations":["NOTCH1", "TP53", "ALK"],"Status":"OFF STUDY","caseLabel":"DTB-112"},
      {"age":76,"drugs":["Enzalutamide"],"gender":"male","Histology":["Adenocarcinoma"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-114"},
      {"age":90,"drugs":["Abiraterone", "Prednisone"],"gender":"male","Histology":["Adenocarcinoma"],"Mutations":["PTEN"],"Status":"ON TREATMENT","caseLabel":"DTB-121"},
      {"age":68,"drugs":["Docetaxel"],"gender":"male","Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"ON TREATMENT","caseLabel":"DTB-116"},
      {"age":82,"drugs":["Docetaxel", "Dexamethasone","Dexamethasone"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-117"},
      {"age":71,"drugs":["Enzalutamide"],"gender":"male","Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-119"},
      {"age":73,"drugs":["Docetaxel"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-118"},
      {"age":64,"drugs":[],"gender":"male","gleasonScore":9,"Histology":[],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-120"},
      {"age":61,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-115"},
      {"age":88,"drugs":["Enzalutamide"],"gender":"male","Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-123"},
      {"age":72,"drugs":["Enzalutamide","Prednisone", "Docetaxel"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON FOLLOW UP","caseLabel":"DTB-122"},
      {"age":74,"drugs":["Docetaxel"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["PTEN"],"Status":"ON FOLLOW UP","caseLabel":"DTB-124"},
      {"age":65,"drugs":[],"gender":"male","gleasonScore":6,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-125"},
      {"age":90,"drugs":["Lupron","Casodex","Enzalutamide","Abiraterone", "Prednisone"],"gender":"male","gleasonScore":7,"Histology":["Other"],"Mutations":["TP53", "FGER1"],"Status":"ON TREATMENT","caseLabel":"DTB-126"},
      {"age":72,"drugs":["Enzalutamide","Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Other"],"Mutations":["RBI", "TP53", "TSC2"],"Status":"ON TREATMENT","caseLabel":"DTB-127"},
      {"age":78,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-128"},
      {"age":66,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":6,"Histology":["Other"],"Mutations":["PTEN"],"Status":"ON TREATMENT","caseLabel":"DTB-129"},
      {"age":65,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Other","Other","Other"],"Mutations":["None"],"Status":"EXPIRED","caseLabel":"DTB-130"},
      {"age":63,"drugs":["Enzalutamide"],"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-131"},
      {"age":83,"drugs":["Enzalutamide"],"gender":"male","Histology":["Other"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-132"},
      {"age":65,"drugs":["Selinexor"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-133"},
      {"age":69,"drugs":["Enzalutamide"],"gender":"male","Histology":["No Definite Tumor","No Definite Tumor"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-134"},
      {"age":79,"drugs":["Abiraterone", "Prednisone"],"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-136"},
      {"age":57,"drugs":["Enzalutamide"],"gender":"male","Histology":["Other","Other"],"Mutations":["TP53", "PTEN","PTEN"],"Status":"ON FOLLOW UP","caseLabel":"DTB-135"},
      {"age":61,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-137"},
      {"age":68,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-139"},
      {"age":78,"drugs":["Docetaxel"],"gender":"male","gleasonScore":6,"Histology":["Adenocarcinoma"],"Mutations":["TP53"],"Status":"ON TREATMENT","caseLabel":"DTB-138"},
      {"age":71,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Other"],"Mutations":["PTEN", "NFI"],"Status":"ON TREATMENT","caseLabel":"DTB-141"},
      {"age":71,"drugs":["Prednisone", "Abiraterone"],"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-142"},
      {"age":75,"drugs":["Selinexor"],"gender":"male","gleasonScore":7,"Histology":["Adenocarcinoma"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-140"},
      {"age":64,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Other"],"Mutations":["None"],"Status":"ON TREATMENT","caseLabel":"DTB-143"},
      {"age":71,"drugs":["Xofigo"],"gender":"male","Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-144"},
      {"age":70,"drugs":[],"gender":"male","Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON FOLLOW UP","caseLabel":"DTB-145"},
      {"age":62,"drugs":["Mitoxantrone", "Cabazitaxel", "Prednisone"],"gender":"male","gleasonScore":9,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-147"},
      {"age":60,"drugs":["Enzalutamide", "Prednisone"],"gender":"male","gleasonScore":8,"Histology":["Other"],"Mutations":["EGFR"],"Status":"ON TREATMENT","caseLabel":"DTB-146"},
      {"age":67,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":["Other"],"Mutations":["TP53", "NTRK2"],"Status":"ON TREATMENT","caseLabel":"DTB-148"},
      {"age":70,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["PIK3R1", "STK11", "PTEN"],"Status":"ON TREATMENT","caseLabel":"DTB-149"},
      {"age":68,"drugs":[],"gender":"male","Histology":[],"Mutations":[],"Status":"OFF STUDY","caseLabel":"DTB-150"},
      {"age":72,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":9,"Histology":["Adenocarcinoma"],"Mutations":["TP53", "NTRK2"],"Status":"ON TREATMENT","caseLabel":"DTB-151"},
      {"age":78,"drugs":["Prednisone", "Abiraterone"],"gender":"male","gleasonScore":7,"Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-153"},
      {"age":78,"drugs":["Selinexor"],"gender":"male","gleasonScore":8,"Status":"ON TREATMENT","caseLabel":"DTB-154"},
      {"age":63,"drugs":[],"gender":"male","gleasonScore":9,"Status":"ON TREATMENT","caseLabel":"DTB-155"},
      {"age":71,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":[],"Mutations":[],"Status":"EXPIRED","caseLabel":"DTB-156"},
      {"age":59,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Status":"ON TREATMENT","caseLabel":"DTB-157"},
      {"age":79,"drugs":["Enzalutamide"],"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-159"},
      {"age":72,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":8,"Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-158"},
      {"age":66,"drugs":[],"gender":"male","Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-161"},
      {"age":87,"drugs":["Dexamethasone"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON STUDY","caseLabel":"DTB-160"},
      {"age":72,"gender":"male","gleasonScore":5,"Histology":[],"Mutations":[],"Status":"ON STUDY","caseLabel":"DTB-162"},
      {"age":79,"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-165"},
      {"age":76,"drugs":["Enzalutamide"],"gender":"male","gleasonScore":7,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-163"},
      {"age":68,"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-169"},
      {"age":71,"gender":"male","gleasonScore":8,"Histology":["Small Cell"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-166"},
      {"age":65,"drugs":[],"gender":"male","gleasonScore":8,"Histology":["No Definite Tumor"],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-168"},
      {"age":64,"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-173"},
      {"age":78,"drugs":[],"gender":"male","gleasonScore":4,"Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-170"},
      {"age":59,"gender":"male","Status":"ON TREATMENT","caseLabel":"DTB-174"},
      {"age":71,"gender":"male","gleasonScore":8,"Histology":[],"Mutations":[],"Status":"ON TREATMENT","caseLabel":"DTB-171"},
    ];

    _.each(newCases, (c) => { Cases.insert(c); });
  }
});