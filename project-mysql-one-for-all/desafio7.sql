SELECT 
  DISTINCT art.artist_name AS 'artista',
  alb.album_name AS 'album',
  COUNT(fav.artist_id) AS 'seguidores'
FROM
  SpotifyClone.artists AS art
JOIN
  SpotifyClone.albums AS alb
ON
  art.artist_id = alb.artist_id
JOIN
  SpotifyClone.favorite_artist AS fav
ON 
  fav.artist_id = alb.artist_id
GROUP BY
  alb.album_id
ORDER BY
  seguidores DESC,
  artista,
  album;
