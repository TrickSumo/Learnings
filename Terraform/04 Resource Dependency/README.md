Resource dependency can be of two type:-
    1. Implicit => ResourceA depends on ResourceB and access its attributes in its arguments.

    2. Explicit => ResourceA depends on ResourceB but does not  access its attributes in its own arguments. 
       In this case we can use dependes_on array attribute to explicitly define dependency (or dependencies).