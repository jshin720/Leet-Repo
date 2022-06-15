# Write your MySQL query statement below
Select
    id, movie, description, rating
    from cinema
    where description not like "boring" And id % 2 != 0
    order by rating desc