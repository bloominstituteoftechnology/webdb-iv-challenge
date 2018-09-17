## Tables
Dish
Recipe
Ingredient
Recipie_Ingredient
Steps

## Relationships

Dish    <-> Recipe
1       <-> Many

Recipe  <-> Ingredient
Many    <-> Many

Recipe  <-> Step
1       <-> Many

## Table Layout

### dishes

|Column |Type   |Rel.   |
|:---:  |:---:  |:---:  |
|id     |Integer|Primary|   
|Name   |Text   |-      |

### recipes

|Column     |Type       |Rel.       |
|:---:      |:---:      |:---:      | 
|id         |Integer    |Primary    |  
|name       |Text       |-          |
|dish_id    |Integer    |Foreign    |

### ingredients

|Column     |Type       |Rel.       |
|:---:      |:---:      |:---:      |
|id         |Integer    |Primary    | 
|Name       |Text       |-          |

### recipes_ingredients

|Column         |Type       |Rel.               |
|:---:          |:---:      |:---:              | 
|id             |integer    |Primary            |
|recipe_id      |Integer    |Foreign            |
|ingredient_id  |Integer    |Foreign            |
|quantity       |Integer    |-                  |

### steps

|Column         |Type       |Rel.               |
|:---:          |:---:      |:---:              | 
|id             |Integer    |Primary            |
|step_order     |Integer    |-                  |
|description    |Text       |-                  |
|recipe_id      |Integer    |Foreign            |


---

# Stand-Up Notes

1. Make a big old fat table.
2. Ask yourself:
**Can this column have more than one value?**
If the answer is yes, the column should be actually be a new table
3. Think about the relationship between each table.

## dishes

id primary key          1
name                    burger        

## recipe 
id primary key
name 

## ingredients
id primary key
name

## steps
id primary key
description


dishes <-> recipes
1          Many

recipes <-> ingredients
many        many

recipes <-> steps
1           many

1 <-> Many 
Put the foreign key in the "many" table.

Many <-> Many
Make a brand new table that includes foreign keys for both.