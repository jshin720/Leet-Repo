# Write your MySQL query statement below
Select salaries.employee_id
    from employees
    right join salaries on employees.employee_id=salaries.employee_id
    where employees.name is Null
union

Select employees.employee_id
    from salaries
    right join employees on salaries.employee_id=employees.employee_id
    where salary is Null

order by employee_id asc