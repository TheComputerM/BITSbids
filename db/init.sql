CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  balance INT NOT NULL,
  avatar TEXT NOT NULL
);
CREATE TABLE user_key (
  id TEXT PRIMARY KEY, 
  user_id TEXT NOT NULL REFERENCES users(id), 
  hashed_password TEXT
);
CREATE TABLE user_session (
  id TEXT PRIMARY KEY, 
  user_id TEXT NOT NULL REFERENCES users(id), 
  active_expires BIGINT NOT NULL, 
  idle_expires BIGINT NOT NULL
);
