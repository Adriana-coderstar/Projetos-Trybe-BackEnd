SELECT
  mus.music_name AS 'nome',
  COUNT(his.music_id) AS 'reproducoes'
FROM
  SpotifyClone.musics AS mus
JOIN
  SpotifyClone.history AS his
ON
  mus.music_id = his.music_id
JOIN
  SpotifyClone.users AS usr
ON
  usr.users_id = his.users_id
WHERE
  usr.plan_id IN (1, 3)
GROUP BY
  nome
ORDER BY
  nome;
