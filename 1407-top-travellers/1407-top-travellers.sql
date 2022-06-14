# Write your MySQL query statement below
Select users.name, 
     Coalesce(null, Sum(rides.distance), 0) as travelled_distance
    from rides
    right join users on users.id=rides.user_id
    group by user_id
    Order by travelled_distance desc, users.name asc