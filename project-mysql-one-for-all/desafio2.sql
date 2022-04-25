SELECT 
  COUNT(mus.music_id) AS 'cancoes',
  COUNT(DISTINCT alb.artist_id) AS 'artistas',
  COUNT(DISTINCT alb.album_id) AS 'albuns'
FROM 
  SpotifyClone.musics AS mus
INNER JOIN
  SpotifyClone.albums AS alb
ON
  mus.album_id = alb.album_id;





