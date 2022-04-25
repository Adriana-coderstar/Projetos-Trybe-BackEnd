SELECT
  mus.music_name AS 'cancao',
  COUNT(his.music_id) AS 'reproducoes'
FROM
  SpotifyClone.musics AS mus
JOIN
  SpotifyClone.history AS his
ON
  mus.music_id = his.music_id
GROUP BY
  mus.music_name
ORDER BY
  reproducoes DESC,
  cancao ASC
LIMIT
  2;
