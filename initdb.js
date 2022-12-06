db = db.getSiblingDB(`course`);

db.createCollection(`course`);

db.course.insertMany([
  {
    name: 'MongoDB',
    description:
      'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    chapters: [],
  },
  {
    name: 'Express',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    chapters: [],
  },
]);
