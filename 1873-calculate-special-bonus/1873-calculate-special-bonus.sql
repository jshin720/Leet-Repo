# Write your MySQL query statement below
Select employee_id,
    (Case
        WHEN employee_id % 2 != 0 And name Not Like "M%" Then salary
        ELSE 0
    End) as bonus
    From Employees
    