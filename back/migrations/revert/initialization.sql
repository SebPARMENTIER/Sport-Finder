-- Revert sportfinder:initialization from pg

BEGIN;

DROP TABLE "association", "user", "review";

COMMIT;
