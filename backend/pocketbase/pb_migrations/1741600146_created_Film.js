/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4269769678",
        "max": 0,
        "min": 0,
        "name": "titre_film",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file4215143340",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "affiche_film",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor3409974709",
        "maxSize": 0,
        "name": "synopsis_film",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "hidden": false,
        "id": "file1168510124",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "bande_annonce_film",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4147320964",
        "max": 0,
        "min": 0,
        "name": "duree_film",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3200872840",
        "max": 0,
        "min": 0,
        "name": "langue_film",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3824217989",
        "max": 0,
        "min": 0,
        "name": "acteurs_film",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_91977388",
    "indexes": [],
    "listRule": null,
    "name": "Film",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388");

  return app.delete(collection);
})
