// Allied Global - Code Challenge
// Javier Monterroso - Guatemala, 24/01/2023

// Retrieve a set of data from a HTML document
// Get the name
var product_name = $("#productTitle").text().trim()

// Get the status
var status = $("#availability > span").text().trim()

// Get the color 
var color = $("#variation_color_name > div > span").text().trim()

// Get the details
var product_details = {}
$("#productOverview_feature_div > div > table > tbody tr").each(function () {
    var header = $(this).find('td').eq(0).text().trim()
    var value = $(this).find('td').eq(1).text().trim()
    product_details[header] = value
})

// Get the about
var about_items = []
$("#feature-bullets > ul li").each((index, value) => {
    var value = $(value).text().trim()
    about_items.push(value)
})

// Get the technical details
var technical_details = {} 
$("#productDetails_techSpec_section_1 tbody tr").each(function () {
    var header = $(this).find('th').eq(0).text().trim()
    var value = $(this).find('td').eq(0).text().trim()
    technical_details[header] = value
})

// Get aditional information
var additional_information = {}
$("#productDetails_detailBullets_sections1 > tbody tr").each(function () {
    var header = $(this).find('th').eq(0).text().trim()
    var value = $(this).find('td').eq(0).text().trim() 
    additional_information[header] = value
})

// Get the product image
var product_image = $("#landingImage").attr("src")

// Make the final object
var result = {
    product_image: product_image,
    additional_information: additional_information,
    technical_details: technical_details,
    about_items: about_items,
    product_name: product_name,
    product_details: product_details,
    color: color,
    status: status,
}
console.log(result)