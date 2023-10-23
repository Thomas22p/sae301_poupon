/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dwdzjm1zql2sa88",
    "created": "2023-10-23 16:55:46.867Z",
    "updated": "2023-10-23 16:55:46.867Z",
    "name": "couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wlgnmeh0",
        "name": "libelle_couleur",
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
  const collection = dao.findCollectionByNameOrId("dwdzjm1zql2sa88");

  return dao.deleteCollection(collection);
})
