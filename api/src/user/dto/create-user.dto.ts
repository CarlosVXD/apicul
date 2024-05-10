import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @MinLength(5,{
        message: 'Minimo 5 caracteres'
    })
    @MaxLength(15,{
        message: 'Maximo 15 caracteres'
    })
    firstName: string;
    @IsNotEmpty()
    lastName: string;  
}
