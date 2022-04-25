SELECT 
  COUNT(his.music_id) AS 'quantidade_musicas_no_historico'
FROM
  SpotifyClone.history AS his
JOIN
  SpotifyClone.users AS usr
ON
  usr.users_id = his.users_id
WHERE
  usr.name = 'Bill';