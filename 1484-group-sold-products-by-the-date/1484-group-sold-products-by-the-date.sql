# Write your MySQL query statement below
Select sell_date, Count(Distinct product) as num_sold, 
Group_concat(
    Distinct product 
    Separator ','
) as products
    from Activities
    Group by sell_date
    