/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    lunette.libelle,\n    lunette.prix, lunette.couleur_branche\nFROM lunette\nLEFT JOIN materiau AS materiau_cadre ON lunette.materiau_cadre = materiau_cadre.id\nLEFT JOIN couleur AS couleur_cadre ON lunette.couleur_cadre = couleur_cadre.id\nLEFT JOIN forme AS forme_cadre ON lunette.forme_cadre = forme_cadre.id\nLEFT JOIN materiau AS materiau_branche ON lunette.materiau_branche = materiau_branche.id\nLEFT JOIN couleur AS couleur_branche ON lunette.couleur_branche = couleur_branche.id\nLEFT JOIN materiau AS materiau_verre ON lunette.materiau_verre = materiau_verre.id\nLEFT JOIN couleur AS couleur_verre ON lunette.couleur_verre = couleur_verre.id\n"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ku5ynzag",
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
    "id": "gxwrajt6",
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
    "id": "hlek5hsz",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("suszqx2aczdhxpl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.libelle, lunette.prix, materiau.libelle_materiau, couleur.libelle_couleur, forme.libelle_forme \nFROM lunette\nLEFT JOIN materiau ON lunette.materiau_cadre = materiau.id\nLEFT JOIN couleur ON lunette.couleur_cadre = couleur.id\nLEFT JOIN forme ON lunette.forme_cadre = forme.id"
  }

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

  // remove
  collection.schema.removeField("ku5ynzag")

  // remove
  collection.schema.removeField("gxwrajt6")

  // remove
  collection.schema.removeField("hlek5hsz")

  return dao.saveCollection(collection)
})
