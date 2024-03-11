
1.Explain the relationship between the "Product" and "Product_Category" entities from the above diagram ?
The "Product" and "ProductCategory" entities have a "many-to-one" relationship, where each product belongs to a single product category, as indicated by the category_id field in the "Product" schema referencing the "ProductCategory" model.

3. How could you ensure that each product in the "Product" table has a valid category assigned to it?
To ensure each product in the "Product" table has valid references:
1. For `category_id`, use Mongoose's `validate` option to check if the referenced "ProductCategory" document exists.
2. For `inventory_id`, validate against the "ProductInventory" collection.
3. For `discount_id`, validate against the "ProductDiscount" collection.