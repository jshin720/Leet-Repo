# Write your MySQL query statement below
Select activity_date as day, Count(distinct user_id) as active_users 
    From Activity 
    Where activity_date Between '20190628' and '20190727'
    Group by activity_date