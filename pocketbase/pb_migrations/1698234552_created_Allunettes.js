/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1o4x72gecnt3sgx",
    "created": "2023-10-25 11:49:12.839Z",
    "updated": "2023-10-25 11:49:12.839Z",
    "name": "Allunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ndvwqr5w",
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
        "id": "atriju6p",
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
        "id": "sjsz4qkq",
        "name": "forme_des_lunettes",
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
        "id": "bovjlqrh",
        "name": "couleur_du_cadre",
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
        "id": "kymd1mod",
        "name": "couleur_du_verre",
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
        "id": "iyfl8shp",
        "name": "materiau_du_cadre",
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
        "id": "pl7bh3vj",
        "name": "materiau_du_verre",
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
        "id": "vezgkaux",
        "name": "utilisateur",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_cadre.libelle_materiau AS materiau_du_cadre,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       users.email AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN users ON lunette.users = users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1o4x72gecnt3sgx");

  return dao.deleteCollection(collection);
})
