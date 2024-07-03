// Datbase schema will be held here

export const schema: string = `
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    passHash TEXT NOT NULL,
    username TEXT NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    role TEXT NOT NULL
)

CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id TEXT NOT NULL REFERENCES users(id)
)


`;

// CREATE TABLE articles (
//     id TEXT PRIMARY KEY,
//     author TEXT NOT NULL,
//     editors
// )
