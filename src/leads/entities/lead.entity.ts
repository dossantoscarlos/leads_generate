import { ApiProperty } from "@nestjs/swagger";

export class Lead {

  id: number;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zipcode: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}
