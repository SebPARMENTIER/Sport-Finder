-- Verify sportfinder:initialization on pg

BEGIN;

SELECT id FROM association WHERE false;
SELECT id FROM user WHERE false;
SELECT id FROM review WHERE false;

ROLLBACK;
