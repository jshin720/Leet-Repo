# Write your MySQL query statement below
Select w1.id
    From Weather w1, Weather w2
    where w1.temperature > w2.temperature And TO_DAYS(w1.recordDate)-TO_DAYS(w2.recordDate)=1