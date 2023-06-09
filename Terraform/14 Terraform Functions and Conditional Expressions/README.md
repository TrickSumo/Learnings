In Terraform, functions and expressions are used to manipulate and transform data within configuration. 

Some examples of Terraform functions include concat(), format(), lower(), upper(), max(), min(), and coalesce()

Functions:-

    STRINGS
        split - names_list = split(",", var.names_string)
    
    MAP
        lookup(var.name_data, var.owner?"admin":"not_admin")

Conditions:-
    name = var.isAdmin? "user1-admin": "user1:
