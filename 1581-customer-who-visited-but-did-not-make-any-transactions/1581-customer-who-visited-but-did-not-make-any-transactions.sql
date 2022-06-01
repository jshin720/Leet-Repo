# Write your MySQL query statement below
Select customer_id, Count(*) As count_no_trans
    From Visits
    Left Join Transactions On Visits.visit_id = Transactions.visit_id
    Where Transactions.transaction_id Is Null
    Group by customer_id