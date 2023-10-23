/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix, materiau.libelle_materiau, couleur.libelle_couleur, forme.libelle_forme \nFROM lunette\nLEFT JOIN materiau ON lunette.materiau_cadre = materiau.id\nLEFT JOIN couleur ON lunette.couleur_cadre = couleur.id\nLEFT JOIN forme ON lunette.forme_cadre = forme.id"
  }

  // remove
  collection.schema.removeField("niednq6q")

  // remove
  collection.schema.removeField("v7rqukla")

  // remove
  collection.schema.removeField("iwxsczwz")

  // remove
  collection.schema.removeField("n0xazsny")

  // remove
  collection.schema.removeField("aolaf0kl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlwpfgf5",
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
    "id": "tccgvhgp",
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
    "id": "9h4ycj8x",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rga0rv0m",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkp2um8r",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix, materiau.libelle_materiau, couleur.libelle_couleur, forme.libelle_forme\nFROM lunette\nLEFT JOIN materiau ON lunette.materiau_verre = materiau.id\nLEFT JOIN couleur ON lunette.couleur_cadre = couleur.id\nLEFT JOIN forme ON lunette.forme_cadre = forme.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "niednq6q",
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
    "id": "v7rqukla",
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
    "id": "iwxsczwz",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n0xazsny",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aolaf0kl",
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
  }))

  // remove
  collection.schema.removeField("wlwpfgf5")

  // remove
  collection.schema.removeField("tccgvhgp")

  // remove
  collection.schema.removeField("9h4ycj8x")

  // remove
  collection.schema.removeField("rga0rv0m")

  // remove
  collection.schema.removeField("wkp2um8r")

  return dao.saveCollection(collection)
})
