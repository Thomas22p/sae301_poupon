/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "82r4hrwrxkm6mz5",
    "created": "2023-10-23 16:55:25.997Z",
    "updated": "2023-10-23 16:55:25.997Z",
    "name": "materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rj4ahhol",
        "name": "libelle_materiau",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("82r4hrwrxkm6mz5");

  return dao.deleteCollection(collection);
})
