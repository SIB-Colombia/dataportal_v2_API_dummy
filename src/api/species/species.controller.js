export function read(req, res) {

  const jsonResponse = [
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
  ]

  return res.status(200).json(jsonResponse);

}