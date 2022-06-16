# Write your MySQL query statement below
Select name 
    from salesperson
    where sales_id not in (
        Select sales_id
            from orders
               join company on orders.com_id = company.com_id
                 where company.name like "RED"
             )

