/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1872298947",
    "maxSelect": 1,
    "name": "lieu_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Cinéma d'Ornans",
      "Salle Saint Vernier",
      "Place Courbet",
      "Musée Gustave Courbet"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // remove field
  collection.fields.removeById("select1872298947")

  return app.save(collection)
})
