SELECT
  DISTINCT usr.name AS 'usuario',
  IF(MAX(YEAR(his.reproduction_date)) >= 2021, 'Usuário ativo', 'Usuário inativo') AS 'condicao_usuario'
FROM
  SpotifyClone.users AS usr
JOIN
  SpotifyClone.history AS his
ON
  usr.users_id = his.users_id
GROUP BY
  usr.users_id
ORDER BY
  1;
