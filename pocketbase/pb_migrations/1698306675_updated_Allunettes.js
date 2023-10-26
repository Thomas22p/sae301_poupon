/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1o4x72gecnt3sgx")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.id AS id_lunette,\n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_branche.libelle_materiau AS materiau_du_cadre,\n       couleur_branche.libelle_couleur AS couleur_des_branches,\n       materiau_branche.libelle_materiau AS materiau_des_branches,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       lunette.users AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN couleur couleur_branche ON lunette.couleur_branche = couleur_branche.id\nJOIN materiau materiau_branche ON lunette.materiau_branche = materiau_branche.id\nJOIN users ON lunette.users = users.id"
  }

  // remove
  collection.schema.removeField("ce2zazuq")

  // remove
  collection.schema.removeField("ilcgmssl")

  // remove
  collection.schema.removeField("j9cluqsq")

  // remove
  collection.schema.removeField("x4oeww07")

  // remove
  collection.schema.removeField("fvsm9ymy")

  // remove
  collection.schema.removeField("bnqn6cli")

  // remove
  collection.schema.removeField("abew2em3")

  // remove
  collection.schema.removeField("gmfa7wf5")

  // remove
  collection.schema.removeField("yr8xhprv")

  // remove
  collection.schema.removeField("fjetwv9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ek6kb2q",
    "name": "id_lunette",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqwfyb6y",
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
    "id": "glml5sby",
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
    "id": "hfvnqhs2",
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
    "id": "wjvcnsgq",
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
    "id": "dz7m5kzh",
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
    "id": "vwbufw2q",
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
    "id": "2v8xnm3s",
    "name": "couleur_des_branches",
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
    "id": "kfz856pa",
    "name": "materiau_des_branches",
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
    "id": "pp8xkcye",
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
    "id": "apq8ve1r",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_branche.libelle_materiau AS materiau_du_cadre,\n       couleur_branche.libelle_couleur AS couleur_des_branches,\n       materiau_branche.libelle_materiau AS materiau_des_branches,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       lunette.users AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN couleur couleur_branche ON lunette.couleur_branche = couleur_branche.id\nJOIN materiau materiau_branche ON lunette.materiau_branche = materiau_branche.id\nJOIN users ON lunette.users = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ce2zazuq",
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
    "id": "ilcgmssl",
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
    "id": "j9cluqsq",
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
    "id": "x4oeww07",
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
    "id": "fvsm9ymy",
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
    "id": "bnqn6cli",
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
    "id": "abew2em3",
    "name": "couleur_des_branches",
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
    "id": "gmfa7wf5",
    "name": "materiau_des_branches",
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
    "id": "yr8xhprv",
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
    "id": "fjetwv9e",
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

  // remove
  collection.schema.removeField("0ek6kb2q")

  // remove
  collection.schema.removeField("yqwfyb6y")

  // remove
  collection.schema.removeField("glml5sby")

  // remove
  collection.schema.removeField("hfvnqhs2")

  // remove
  collection.schema.removeField("wjvcnsgq")

  // remove
  collection.schema.removeField("dz7m5kzh")

  // remove
  collection.schema.removeField("vwbufw2q")

  // remove
  collection.schema.removeField("2v8xnm3s")

  // remove
  collection.schema.removeField("kfz856pa")

  // remove
  collection.schema.removeField("pp8xkcye")

  // remove
  collection.schema.removeField("apq8ve1r")

  return dao.saveCollection(collection)
})
