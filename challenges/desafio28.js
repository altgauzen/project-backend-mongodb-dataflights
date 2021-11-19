const latamAB = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  { empresa: latamAB,
    totalVoosDomesticos: db.voos.find({
  $and: [ 
    { "empresa.nome": latamAB },
    { natureza: "Doméstica" },
  ],
  }).count() },
  );

db.resumoVoos.findOne(
  { empresa: latamAB },
  { _id: false, empresa: true, totalVoosDomesticos: true },
);