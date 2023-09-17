import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class AddMessageDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  chatID: string;

  @IsString()
  @IsEnum(['request', 'response'])
  type: string;

  @IsNotEmpty()
  @MinLength(1, { message: 'Message must have atleast 1 character.' })
  text: string;
}