# Swag Management

This application is meant to mirror Koits Designs's custom jackets page at https://go.kotisdesign.com/products/custom-jackets/

It uses Ruby on Rails as the backend api and React.js for the front-end.

Currently, the functionality supports showing a list of orders, and creating an order, which belongs to a product.

## Instructions:

Clone Repo
```
git clone git@github.com:maxfrda/swag_management.git
```
swith to repo
```
cd swag_management
```

install gems
```
bundle install
```

create, migrate, and populate database
```
rails db:create && rails db:migrate && rails db:seed
```

start rails server
```
rails s
```

switch to react app in new window
```
cd frontend
```

install packages
```
npm install
```
Start react server
```
npm start
```


Your orders at the bottom should be empty, however you can add and order by click the `Start Your Jacket` button.


![kotis-design](https://github.com/user-attachments/assets/6c961e4f-78ff-4856-87e2-019c433cad53)
