export function read(req, res) {

    var jsonResponse = {
        records: 2496772,
        species: 2600,
        georeferenced: 1965404,
        publicadores: 1800,
    }

    return res.status(200).json(jsonResponse);

}