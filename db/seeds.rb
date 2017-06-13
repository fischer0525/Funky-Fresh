# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Rails.env.development? || Rails.env.production?

Product.destroy_all
Buy.destroy_all
New.destroy_all
Event.destroy_all
Contributor.destroy_all

product1 = Product.create!(product_title: "Kombucha 1", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product2 = Product.create!(product_title: "Kombucha 2", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product3 = Product.create!(product_title: "Kombucha 3", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product4 = Product.create!(product_title: "Kombucha 4", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product5 = Product.create!(product_title: "Kombucha 5", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product6 = Product.create!(product_title: "Kombucha 6", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product7 = Product.create!(product_title: "Kombucha 7", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product8 = Product.create!(product_title: "Kombucha 8", product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg", product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
end
