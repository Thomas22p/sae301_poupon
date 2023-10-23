/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix\nFROM lunette, materiau, forme\nWHERE lunette.materiau_verre = materiau.id"
  }

  // remove
  collection.schema.removeField("ofgbcs2v")

  // remove
  collection.schema.removeField("hrmpwkjm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ot29qa9p",
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
    "id": "ilg4asvx",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix AS Lunettes\nFROM lunette, materiau, forme\nWHERE lunette.materiau_verre = materiau.id"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("ot29qa9p")

  // remove
  collection.schema.removeField("ilg4asvx")

  return dao.saveCollection(collection)
})
