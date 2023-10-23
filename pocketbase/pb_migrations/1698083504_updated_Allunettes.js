/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre\nFROM lunette\nLEFT JOIN materiau ON lunette.materiau_verre = materiau.id\nLEFT JOIN couleur ON lunette.couleur_cadre = couleur.id\nLEFT JOIN forme ON lunette.forme_cadre = forme.id"
  }

  // remove
  collection.schema.removeField("breb8167")

  // remove
  collection.schema.removeField("h9gol4wq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pqaiqygn",
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
    "id": "2ich1p5a",
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
    "id": "qlcbclel",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zkcl3v5a",
    "name": "couleur_cadre",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "usfd0wgd",
    "name": "couleur_verre",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix\nFROM lunette\nLEFT JOIN couleur ON lunette.couleur_cadre = couleur.id\nLEFT JOIN forme ON lunette.forme_cadre = forme.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "breb8167",
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
    "id": "h9gol4wq",
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

  // remove
  collection.schema.removeField("pqaiqygn")

  // remove
  collection.schema.removeField("2ich1p5a")

  // remove
  collection.schema.removeField("qlcbclel")

  // remove
  collection.schema.removeField("zkcl3v5a")

  // remove
  collection.schema.removeField("usfd0wgd")

  return dao.saveCollection(collection)
})
