module.exports = (err, req, res, next) => {
  switch (err.message) {
    case 'dish':
      return res.status(400).json({
        error: 'DISH_NEEDS_CONTENT_REQUIRED',
        example: { dish_name: 'yourDishName' }
      })
      break
    case 'recipe':
      return res.status(400).json({
        error: 'DISH_ID & RECIPE_NAME NEED CONTENT_REQUIRED',
        example: { dish_id: 'yourDishID', recipe_name: 'yourRecipeName' }
      })
      break
    default:
      return res.status(500).json(err.message)
      break
  }
}
