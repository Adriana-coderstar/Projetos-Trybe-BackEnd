
SELECT 
  usr.name AS 'usuario',
  COUNT(his.music_id) AS 'qtde_musicas_ouvidas',
  ROUND(SUM(mus.music_seconds / 60), 2) AS 'total_minutos'
FROM
  SpotifyClone.users AS usr
JOIN
  SpotifyClone.history AS his
ON
  usr.users_id = his.users_id
JOIN
  SpotifyClone.musics AS mus
ON
  his.music_id = mus.music_id
GROUP BY
    usr.users_id
ORDER BY
  usr.name ASC;
