# Write your MySQL query statement below
Select 
    actor_id, director_id
From actordirector
    group by actor_id, director_id
    having Count(*) >=3