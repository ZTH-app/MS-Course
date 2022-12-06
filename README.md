# MS-COURSE

Micro service pour gérer les cours d'un établissement scolaire

## Dépendences

- NodeJS
- TypeScript
- NestJS

## Installation

### DBB avec Docker

La config de la BDD se trouve dans le fichier `docker-compose.yml` à la racine du projet.

> NB : n'oubliez pas de créer un fichier `.env` à la racine du projet pour y mettre les variables d'environnement. Basez vous sur le fichier `.env.example` pour créer le fichier `.env`.

Elle fait appel à une image Mongo, donc le fichier de config est `initdb.js` à la racine du projet.

Elle créé une collection `course` dans une BDD `course` et insère un document exemple. :

```json
{
  "name": "MongoDB",
  "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
  "chapters": []
}
```

Vous pouvez modifier ce document exemple à votre guise.

### NestJS

Installation des packages NPM

```bash
npm install
```

## Lancement

Lancez d'abord la BDD avec Docker

```bash
docker-compose up -d
```

Puis lancez le serveur NestJS

```bash
npm start
```

## API

### GET /courses

Retourne la liste des cours

```json
[
  {
    "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
    "name": "MongoDB",
    "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    "chapters": [
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
    ]
  },
  {
    "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
    "name": "MongoDB",
    "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    "chapters": [
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
    ]
  }
]
```

### GET /courses/:id

Retourne un cours

```json
{
  "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
  "name": "MongoDB",
  "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
   "chapters": [
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
      {
        "id": "5f9f9f9f9f9f9f9f9f9f9f9f",
        "name": "MongoDB",
        "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        "content": "..."
      }
    ]
}
```

### POST /courses

Créer un cours

```json
{
  "name": "MongoDB",
  "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
   "chapters": [
      "5f9f9f9f9f9f9f9f9f9f9f9f",
      "5f9f9f9f9f9f9f9f9f9f9f9f",
      "5f9f9f9f9f9f9f9f9f9f9f9f",
      "5f9f9f9f9f9f9f9f9f9f9f9f"
    ]
}
```

### PATCH /courses/:id

Mettre à jour un cours

```json
{
  "name": "MongoDB",
  "description": "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
  "chapters": []
}
```

### DELETE /courses/:id

Supprimer un cours
