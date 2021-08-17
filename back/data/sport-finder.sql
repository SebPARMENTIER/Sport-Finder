BEGIN;

DROP TABLE IF EXISTS association, "user", review;

CREATE TABLE "association" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "key_association" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "review" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "star" TEXT NOT NULL,
    "content" TEXT,
    "association_id" INT REFERENCES "association"("id"),
    "user_id" INT REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;