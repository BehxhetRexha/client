export type User = {
id:string;
displetName:string;
email:string;
token:string;
imageUrl?:string;
}

export type LoginCreds = {
email:string;
password:string;
}

export type RegisterCreds = {
displetName:string;
email:string;
password:string;
}
