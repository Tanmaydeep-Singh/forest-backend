import { IsString, IsNotEmpty } from 'class-validator';

export class SpecificationDto {
  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsString()
  @IsNotEmpty()
  species: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}

export class AddFriendDto {
  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsString()
  @IsNotEmpty()
  secondWalletAddress: string;
}
