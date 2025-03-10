/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select794262873",
    "maxSelect": 1,
    "name": "lieu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Cinéma d'Ornans",
      "Place Courbet"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("select794262873")

  return app.save(collection)
})
