/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_21851994",
    "hidden": false,
    "id": "relation167749844",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "participe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_91977388",
    "hidden": false,
    "id": "relation2549671404",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "linked",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_21851994",
    "hidden": false,
    "id": "relation167749844",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "participe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_91977388",
    "hidden": false,
    "id": "relation2549671404",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "linked",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
