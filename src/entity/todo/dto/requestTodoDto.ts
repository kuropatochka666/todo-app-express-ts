import {
  IsEmail,
  IsNumber,
  IsString,
} from "class-validator";

export class RequestTodoDto {
  @IsNumber({}, { message: "Неверный пользователь" })
  userId: number;

  @IsEmail({}, { message: "Неверная почта" })
  email: string;

  @IsString()
  text: string;
}
