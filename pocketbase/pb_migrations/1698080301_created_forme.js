/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vfibi7ifkwuymn0",
    "created": "2023-10-23 16:58:21.094Z",
    "updated": "2023-10-23 16:58:21.094Z",
    "name": "forme",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gztcb9w0",
        "name": "libelle_forme",
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
  const collection = dao.findCollectionByNameOrId("vfibi7ifkwuymn0");

  return dao.deleteCollection(collection);
})
