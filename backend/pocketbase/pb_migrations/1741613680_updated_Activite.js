/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date540432300",
    "max": "",
    "min": "",
    "name": "dateheure_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date540432300",
    "max": "",
    "min": "",
    "name": "heure_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
