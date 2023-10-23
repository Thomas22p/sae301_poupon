/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "suszqx2aczdhxpl",
    "created": "2023-10-23 17:46:05.579Z",
    "updated": "2023-10-23 17:46:05.579Z",
    "name": "Allunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ofgbcs2v",
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
        "id": "hrmpwkjm",
        "name": "Lunettes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix AS Lunettes\nFROM lunette, materiau, forme\nWHERE lunette.materiau_verre = materiau.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl");

  return dao.deleteCollection(collection);
})
