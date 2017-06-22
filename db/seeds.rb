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
end


d1 = DateTime.new(2017,7,1,7)
d2 = DateTime.new(2017,7,2,8)
d3 = DateTime.new(2017,7,3,9)


contributor1 = Contributor.create!(contributor_img: "https://celebratingart.files.wordpress.com/2012/09/isabella-headshot.jpg",
contributor_name: "Raven Elyse", contributor_bio: "This Artist is big into art and really loves art and
often loves art when its purest artiness is art.", contributor_url: "http://www.deviantart.com/")
contributor2 = Contributor.create!(contributor_img: "https://celebratingart.files.wordpress.com/2012/09/isabella-headshot.jpg",
contributor_name: "Raven Elyse", contributor_bio: "This Artist is big into art and really loves art and
often loves art when its purest artiness is art.", contributor_url: "http://www.deviantart.com/")
contributor3 = Contributor.create!(contributor_img: "https://celebratingart.files.wordpress.com/2012/09/isabella-headshot.jpg",
contributor_name: "Raven Elyse", contributor_bio: "This Artist is big into art and really loves art and
often loves art when its purest artiness is art.", contributor_url: "http://www.deviantart.com/")
news1 = New.create!(news_img: "https://brodandtaylor.com/wp-content/uploads/2016/01/Kombucha-800-x-300web-7935.jpg",
news_title: "New Flavor Release!", news_description: "Introducing our new Peach tarty party,
golden peached wit a blend of 5 herbs and spices.")
news2 = New.create!(news_img: "https://brodandtaylor.com/wp-content/uploads/2016/01/Kombucha-800-x-300web-7935.jpg",
news_title: "New Flavor Release!", news_description: "Introducing our new Peach tarty party,
golden peached wit a blend of 5 herbs and spices.")
news3 = New.create!(news_img: "https://brodandtaylor.com/wp-content/uploads/2016/01/Kombucha-800-x-300web-7935.jpg",
news_title: "New Flavor Release!", news_description: "Introducing our new Peach tarty party,
golden peached wit a blend of 5 herbs and spices.")
event1 = Event.create!(event_img: "https://img.vimbly.com/images/full_photos/beer-flights-13.jpg",
event_title: "Kombucha Tasting 1", event_datetime: d1, event_description: "New iskabibbles flavor",
event_address: "1200 Market St.", event_city: "Philadelphia", event_state: "PA", event_zip: "19130")
event2 = Event.create!(event_img: "https://img.vimbly.com/images/full_photos/beer-flights-13.jpg",
event_title: "Kombucha Tasting 1", event_datetime: d2, event_description: "New iskabibbles flavor",
event_address: "1200 Market St.", event_city: "Philadelphia", event_state: "PA", event_zip: "19130")
event3 = Event.create!(event_img: "https://img.vimbly.com/images/full_photos/beer-flights-13.jpg",
event_title: "Kombucha Tasting 1", event_datetime: d3, event_description: "New iskabibbles flavor",
event_address: "1200 Market St.", event_city: "Philadelphia", event_state: "PA", event_zip: "19130")
business1 = Buy.create!(business_name: "Bottle Shop",
business_url: "http://www.villagemotorsinc.net/", business_description: "Hot cars and cold Kombucha",
business_address: "53 Walnuttown Road", business_city: "Fleetwood", business_state: "PA",
business_zip: "19522")
business2 = Buy.create!(business_name: "Bottle Shop",
business_url: "http://www.villagemotorsinc.net/", business_description: "Hot cars and cold Kombucha",
business_address: "53 Walnuttown Road", business_city: "Fleetwood", business_state: "PA",
business_zip: "19522")
business3 = Buy.create!(business_name: "Bottle Shop",
business_url: "http://www.villagemotorsinc.net/", business_description: "Hot cars and cold Kombucha",
business_address: "53 Walnuttown Road", business_city: "Fleetwood", business_state: "PA",
business_zip: "19522")
product1 = Product.create!(product_title: "Kombucha 1",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product2 = Product.create!(product_title: "Kombucha 2",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product3 = Product.create!(product_title: "Kombucha 3",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product4 = Product.create!(product_title: "Kombucha 4",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product5 = Product.create!(product_title: "Kombucha 5",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product6 = Product.create!(product_title: "Kombucha 6",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product7 = Product.create!(product_title: "Kombucha 7",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
product8 = Product.create!(product_title: "Kombucha 8",
product_img: "http://thecookinggeek.com/wp-content/uploads/2010/12/Glass-of-iced-tea.jpg",
product_description: "OMG icey and so nicey, you don't have to think twicey about enjoying this beverage")
