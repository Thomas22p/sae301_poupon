/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y9gke85sh657cou",
    "created": "2023-10-25 17:41:55.415Z",
    "updated": "2023-10-25 17:41:55.415Z",
    "name": "lunette_auth",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nodcnmzc",
        "name": "Lunettes_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "0o1xn8q03ec3yju",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "3zqbbuw6",
        "name": "Utilisateur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "91qi6skb",
        "name": "Lunettes_nom",
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
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,\n lunette.id as Lunettes_id, users.id as Utilisateur, lunette.libelle as Lunettes_nom\nFROM lunette, users\nWHERE lunette.users = users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y9gke85sh657cou");

  return dao.deleteCollection(collection);
})
