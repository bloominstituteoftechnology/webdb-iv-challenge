
1 <---> Many 
put foreign key on the one with many

Many <---> Many 
Foreign Keys on all (association table)




#Tables

#Dishes
|Column         |Type           |Rel.
|:---:          |:---:          |:---:
|id             |int            |Primary Key
|name           |text           |Unique


#Recipes
(Association Table)
|Column         |Type           |Rel.
|:---:          |:---:          |:---:
|id             |int            |Primary Key
|name           |text           |Unique
|dishes_id      |int            |
|ingredients_id |int            |
|steps_id       |int            |
|


#Individual Ingredients
|Column                 |Type           |Rel.
|:---:                  |:---:          |:---:
|id                     |int            |Primary Key
|name(indiv ingredients)          |text           |Unique
|quanity                |int            |



#All Ingredients
|Column         |Type           |Rel.
|:---:          |:---:          |:---:
|id             |int            |Primary Key
|name(Ingredients for recipe)          |text           |Unique
|name(Ingredients for recipe)          |text           |Unique



#Steps
|Column         |Type           |Rel.
|:---:          |:---:          |:---:
|id             |int            |Primary Key
|name           |text           |Unique












//My 
#Current Ingredients
|Column         |Type           |Rel.
|:---:          |:---:          |:---:
|id             |int            |Primary Key
|name           |text           |Unique
