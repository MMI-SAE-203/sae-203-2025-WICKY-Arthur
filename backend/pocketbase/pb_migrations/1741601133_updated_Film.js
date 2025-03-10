/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("select967403474")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select967403474",
    "maxSelect": 2,
    "name": "genre_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Drame",
      "Romance",
      "Science-fiction",
      "Expérimental"
    ]
  }))

  return app.save(collection)
})
