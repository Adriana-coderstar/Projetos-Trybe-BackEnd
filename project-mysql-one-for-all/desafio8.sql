SELECT
  art.artist_name AS 'artista',
  alb.album_name AS 'album'
FROM
  SpotifyClone.artists AS art
JOIN
  SpotifyClone.albums AS alb
ON
  art.artist_id = alb.artist_id
WHERE
  art.artist_name = 'Walter Phoenix'
ORDER BY
  alb.album_name;
