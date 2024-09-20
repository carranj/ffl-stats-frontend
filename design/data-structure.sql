CREATE TABLE userRoles (
    roleId SERIAL PRIMARY KEY,
    roleName VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    role INTEGER REFERENCES userRoles(roleId),
    isActive BOOLEAN,
    dateJoined TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    teamName VARCHAR(100),
    profilePictureUrl VARCHAR(255),
    bio TEXT,
    lastActive TIMESTAMP
);

CREATE TABLE seasons (
    seasonId SERIAL PRIMARY KEY,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL
);

CREATE TABLE seasonUsers (
    seasonUserId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId)
);

CREATE TABLE matchups (
    matchupId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    startDate DATE NOT NULL,
    week INTEGER NOT NULL,
    teamA INTEGER REFERENCES users(userId),
    teamB INTEGER REFERENCES users(userId),
    winner INTEGER REFERENCES users(userId),
    teamAScore DECIMAL(5, 2),
    teamBScore DECIMAL(5, 2)
);

CREATE TABLE drafts (
    draftId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId),
    yahooPlayerId VARCHAR(50),
    round INTEGER,
    pick INTEGER
);

CREATE TABLE pickems (
    pickemId SERIAL PRIMARY KEY,
    matchupId INTEGER REFERENCES matchups(matchupId),
    userId INTEGER REFERENCES users(userId),
    predictedWinner INTEGER REFERENCES users(userId)
);

CREATE TABLE weeklyScores (
    scoreId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId),
    week INTEGER NOT NULL,
    score DECIMAL(5, 2)
);

CREATE TABLE userRankings (
    rankingId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId),
    wins INTEGER,
    losses INTEGER,
    finalRank INTEGER
);

CREATE TABLE userStreaks (
    streakId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId),
    winStreaksCount INTEGER DEFAULT 0,
    lossStreaksCount INTEGER DEFAULT 0
);

CREATE TABLE beltChampions (
    championId SERIAL PRIMARY KEY,
    seasonId INTEGER REFERENCES seasons(seasonId),
    userId INTEGER REFERENCES users(userId),
    startDate TIMESTAMP,
    endDate TIMESTAMP
);