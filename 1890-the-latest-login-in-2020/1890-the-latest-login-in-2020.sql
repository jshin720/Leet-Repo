# Write your MySQL query statement below
Select user_id, time_stamp As last_stamp
    From Logins
    Where time_stamp In (
        Select Max(time_stamp) 
            from Logins
            Where time_stamp Like '%2020%' 
            group by user_id
        )
    
    
    