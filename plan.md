objective:
full stack app for a LP.

db - mysql

 db name: projectSchedule
items table:
itemID (pk)
itemName
itemDescription
thumb
itemImage
itemDate
tags
category

category table:
catID (pk)
itemID(fk)
landingPages
commerceSites
simpleSites
nodeJSites

availability table
scheduleID (pk)
itemID(fk)
scheduleName
scheduleDate
isAvailable -(bool)

users table
userID (pk)
scheduleID (fk)
userName
userPhone
userMail
message






create a lp for time schedule 

frontend-
React - deploy - google cloud / digitalocean
ssh (connection)

