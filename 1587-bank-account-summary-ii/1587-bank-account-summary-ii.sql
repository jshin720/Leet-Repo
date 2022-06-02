# Write your MySQL query statement below
Select name, Sum(transactions.amount) As balance
    From Users
    Left Join Transactions On Transactions.account = Users.account 
    Group by transactions.account
    Having Sum(Transactions.amount) > 10000 