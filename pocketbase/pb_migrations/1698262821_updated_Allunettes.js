/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1o4x72gecnt3sgx")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_cadre.libelle_materiau AS materiau_du_cadre,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       lunette.users AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN users ON lunette.users = users.id"
  }

  // remove
  collection.schema.removeField("as3njkeo")

  // remove
  collection.schema.removeField("kgjtd9vy")

  // remove
  collection.schema.removeField("svpibtsg")

  // remove
  collection.schema.removeField("n0txhzsy")

  // remove
  collection.schema.removeField("swuarsne")

  // remove
  collection.schema.removeField("qum3os76")

  // remove
  collection.schema.removeField("80txqu6i")

  // remove
  collection.schema.removeField("ev7iwzcx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ospi0etv",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w2xyzhvw",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oweku9xx",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bndf2xp3",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxipylqd",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocbfxudb",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wy6ylzyi",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfdiej1x",
    "name": "utilisateur",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1o4x72gecnt3sgx")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_cadre.libelle_materiau AS materiau_du_cadre,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       users.email AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN users ON lunette.users = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "as3njkeo",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kgjtd9vy",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svpibtsg",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n0txhzsy",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "swuarsne",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qum3os76",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80txqu6i",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ev7iwzcx",
    "name": "utilisateur",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("ospi0etv")

  // remove
  collection.schema.removeField("w2xyzhvw")

  // remove
  collection.schema.removeField("oweku9xx")

  // remove
  collection.schema.removeField("bndf2xp3")

  // remove
  collection.schema.removeField("fxipylqd")

  // remove
  collection.schema.removeField("ocbfxudb")

  // remove
  collection.schema.removeField("wy6ylzyi")

  // remove
  collection.schema.removeField("pfdiej1x")

  return dao.saveCollection(collection)
})
