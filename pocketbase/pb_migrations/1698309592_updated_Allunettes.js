/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1o4x72gecnt3sgx")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.id AS id_lunette,\n       lunette.updated as temps,\n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_branche.libelle_materiau AS materiau_du_cadre,\n       couleur_branche.libelle_couleur AS couleur_des_branches,\n       materiau_branche.libelle_materiau AS materiau_des_branches,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       lunette.users AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN couleur couleur_branche ON lunette.couleur_branche = couleur_branche.id\nJOIN materiau materiau_branche ON lunette.materiau_branche = materiau_branche.id\nJOIN users ON lunette.users = users.id"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvbzxh1i",
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
    "id": "gsb8aifx",
    "name": "temps",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylyafonb",
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
    "id": "gnx51jid",
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
    "id": "rjvnqrac",
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
    "id": "dvsjxgic",
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
    "id": "bvxqdwbq",
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
    "id": "uuzcd4s8",
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
    "id": "lyhwvefa",
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
    "id": "6sgkxhzs",
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
    "id": "hpe4adm2",
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
    "id": "wsltblrb",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunette.id AS id_lunette,\n       lunette.libelle, \n       lunette.prix, \n       forme.libelle_forme AS forme_des_lunettes,\n       couleur_cadre.libelle_couleur AS couleur_du_cadre,\n       couleur_verre.libelle_couleur AS couleur_du_verre,\n       materiau_branche.libelle_materiau AS materiau_du_cadre,\n       couleur_branche.libelle_couleur AS couleur_des_branches,\n       materiau_branche.libelle_materiau AS materiau_des_branches,\n       materiau_verre.libelle_materiau AS materiau_du_verre,\n       lunette.users AS utilisateur\nFROM lunette\nJOIN forme ON lunette.forme_cadre = forme.id\nJOIN couleur couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verre ON lunette.couleur_verre = couleur_verre.id\nJOIN materiau materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verre ON lunette.materiau_verre = materiau_verre.id\nJOIN couleur couleur_branche ON lunette.couleur_branche = couleur_branche.id\nJOIN materiau materiau_branche ON lunette.materiau_branche = materiau_branche.id\nJOIN users ON lunette.users = users.id"
  }

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

  // remove
  collection.schema.removeField("yvbzxh1i")

  // remove
  collection.schema.removeField("gsb8aifx")

  // remove
  collection.schema.removeField("ylyafonb")

  // remove
  collection.schema.removeField("gnx51jid")

  // remove
  collection.schema.removeField("rjvnqrac")

  // remove
  collection.schema.removeField("dvsjxgic")

  // remove
  collection.schema.removeField("bvxqdwbq")

  // remove
  collection.schema.removeField("uuzcd4s8")

  // remove
  collection.schema.removeField("lyhwvefa")

  // remove
  collection.schema.removeField("6sgkxhzs")

  // remove
  collection.schema.removeField("hpe4adm2")

  // remove
  collection.schema.removeField("wsltblrb")

  return dao.saveCollection(collection)
})
