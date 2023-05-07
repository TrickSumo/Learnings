Flow:- 
    terraform init
    terraform plan
    terraform apply

Useful Terraform Commands:-
    terraform show
    terraform output

    terraform validate
    terraform validate

    terraform  providers
        terrafrom providers mirror /root/new_file
    terrafrom refresh
    terrafrom graph | got -Tsvg > graph.svg (apt install graphviz -y)



Shortcuts:-
    * While typing resource-type, type only provider (like aws) and then hit ctrl+space to see all resource type available. 

Variable Precedence:-
    Environment Variables
    terraform.tfvars file
    *.auto.tfvars file
    -var of -var-file flag

Dummy Terraform Resource Providers:-
    time_static and other time providers
    local_file
    radom_pet
    tls_private_key

Life cycle Rules
    create_before_destroy (true)
    prevent_destroy (true)
    ignore_changes (list or all)

Terrafom Meta Arguments
    Lifecycles
    Dependson
    Count and Foreach
    Provisioners
    Providers
    Backends

Terraform BuiltIn Functions
    length() -> to calculate length of list
    toset() -> to convert list to set