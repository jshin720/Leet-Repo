# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement belo


# delete p1
#     from person as p1
#     inner join person as p2
#     where p1.email like p2.email and p1.id > p2.id
    
delete
    from person 
    where id not in (
        select *
            from (
            select min(id)
                from person
                 group by email
            ) as p1
    )