SELECT
  FORMAT(MIN(plan.price_plan), 2) AS 'faturamento_minimo',
  FORMAT(MAX(plan.price_plan), 2) AS 'faturamento_maximo',
  FORMAT(AVG(plan.price_plan), 2) AS 'faturamento_medio',
  FORMAT(SUM(plan.price_plan), 2) AS 'faturamento_total'
FROM
  SpotifyClone.plan AS plan
JOIN
  SpotifyClone.users AS usr
ON
  plan.plan_id = usr.plan_id
ORDER BY
  plan.price_plan;

