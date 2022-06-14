# Write your MySQL query statement below
Select stock_name, sum(
    case
        when operation = "buy" then -1 * price
        else price
    end
    ) as capital_gain_loss
    
    from stocks
    group by stock_name