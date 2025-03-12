/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_21851994",
    "hidden": false,
    "id": "relation3196114099",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "activite_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // remove field
  collection.fields.removeById("relation3196114099")

  return app.save(collection)
})
