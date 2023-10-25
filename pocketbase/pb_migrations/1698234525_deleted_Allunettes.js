/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "suszqx2aczdhxpl",
    "created": "2023-10-23 17:46:05.579Z",
    "updated": "2023-10-23 19:27:14.715Z",
    "name": "Allunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ku5ynzag",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gxwrajt6",
        "name": "prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "hlek5hsz",
        "name": "couleur_branche",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "dwdzjm1zql2sa88",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    lunette.libelle,\n    lunette.prix, lunette.couleur_branche\nFROM lunette\nLEFT JOIN materiau AS materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nLEFT JOIN couleur AS couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nLEFT JOIN forme AS forme_cadre ON lunette.forme_cadre = forme_cadre.id\nLEFT JOIN materiau AS materiau_branche ON lunette.materiau_branche = materiau_branche.id\nLEFT JOIN couleur AS couleur_branche ON lunette.couleur_branche = couleur_branche.id\nLEFT JOIN materiau AS materiau_verre ON lunette.materiau_verre = materiau_verre.id\nLEFT JOIN couleur AS couleur_verre ON lunette.couleur_verre = couleur_verre.id\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
