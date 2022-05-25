

Select firstName, lastName, city, state
From Person
    Left Join Address
    on Person.personId = Address.personId

    

    