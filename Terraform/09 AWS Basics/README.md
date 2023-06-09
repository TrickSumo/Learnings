Localstack software can be used to locally simulate AWS.

===================================================
AWS CLI IAM Basics
===================================================

To list iam users:-
    aws iam list-users

To create user:-
    aws iam create-user --user-name Jack

To create group:-
    aws iam create-group --user-name Admins

To attach poilcy to group:-
    aws iam attach-group-policy --group-name Admins --policy-arn arn:aws:iam::aws:policy/AdministratorAccess

To list policy attached in group:-
    aws iam list-attached-group-policies --group-name Admins

