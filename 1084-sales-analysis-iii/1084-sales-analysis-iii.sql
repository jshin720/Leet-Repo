# Write your MySQL query statement below

select distinct product.product_id, product.product_name
    from product
    inner join sales on product.product_id = sales.product_id
  
    where product.product_id not in (
        select product_id
            from sales
            where sale_date not between '2019-01-01' and '2019-03-31'
    )
  